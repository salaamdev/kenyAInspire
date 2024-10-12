const Progress = require('../models/progressModel');
const StudentProgress = require('../models/studentProgressModel');
const Course = require('../models/courseModel');
const Enrollment = require('../models/enrollmentModel'); // Assuming you have an Enrollment model

exports.getProgressForStudent = async (req, res) => {
    const userId = req.user.id;

    try {
        const progressData = await Progress.find({user_id: userId});

        res.json({progress: progressData});
    } catch (error) {
        console.error('Error fetching progress:', error);
        res.status(500).json({message: 'Server error'});
    }
};

exports.updateTopicCompletion = async (req, res) => {
    const userId = req.user._id;
    const {courseId, topicId} = req.params;
    const {isCompleted} = req.body;

    try {
        let studentProgress = await StudentProgress.findOne({
            user_id: userId,
            course_id: courseId,
        });

        if (!studentProgress) {
            // Create new progress document
            studentProgress = new StudentProgress({
                user_id: userId,
                course_id: courseId,
                completed_topics: [],
            });
        }

        if (isCompleted) {
            // Add topicId to completed_topics if not already present
            if (!studentProgress.completed_topics.includes(topicId)) {
                studentProgress.completed_topics.push(topicId);
            }
        } else {
            // Remove topicId from completed_topics
            studentProgress.completed_topics = studentProgress.completed_topics.filter(
                (id) => id.toString() !== topicId
            );
        }

        studentProgress.last_updated = new Date();
        await studentProgress.save();

        res.json({message: 'Topic completion status updated'});
    } catch (error) {
        console.error('Error updating topic completion:', error);
        res.status(500).json({message: 'Server error'});
    }
};

exports.getOverallProgress = async (req, res) => {
    const userId = req.user._id;

    try {
        const progressData = await StudentProgress.find({user_id: userId});

        let totalCompletedTopics = 0;
        let totalTopics = 0;

        for (const progress of progressData) {
            const course = await Course.findById(progress.course_id);
            const courseTotalTopics = course ? course.topics.length : 0;
            totalCompletedTopics += progress.completed_topics.length;
            totalTopics += courseTotalTopics;
        }

        // Fetch courses without progress to include any courses the user hasn't started
        const enrolledCourses = await Enrollment.find({user_id: userId}).populate('course_id');
        for (const enrollment of enrolledCourses) {
            const course = enrollment.course_id;
            if (course && !progressData.find((p) => p.course_id.equals(course._id))) {
                totalTopics += course.topics.length;
            }
        }

        const completionRate = totalTopics > 0 ? (totalCompletedTopics / totalTopics) * 100 : 0;

        res.json({
            totalCompletedTopics,
            totalTopics,
            completionRate,
        });
    } catch (error) {
        console.error('Error fetching overall progress:', error);
        res.status(500).json({message: 'Server error'});
    }
};
