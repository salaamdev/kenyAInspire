const Progress = require('../models/progressModel');
const StudentProgress = require('../models/studentProgressModel');

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
