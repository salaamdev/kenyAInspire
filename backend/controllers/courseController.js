const mongoose = require('mongoose');
const Course = require('../models/courseModel');
const Enrollment = require('../models/enrollmentModel');
const StudentProgress = require('../models/studentProgressModel');

exports.getCoursesForStudent = async (req, res) => {
    const userId = req.user._id;

    try {
        const enrollments = await Enrollment.find({user_id: userId}).populate('course_id').lean();

        const courses = await Promise.all(
            enrollments.map(async (enrollment) => {
                const course = enrollment.course_id;
                if (!course) {
                    return null;
                }

                const progress = await StudentProgress.findOne({
                    user_id: userId,
                    course_id: course._id,
                });

                const totalTopics = course.topics.length || 0;
                const completedTopicsCount = progress ? progress.completed_topics.length : 0;
                const progressPercentage = totalTopics > 0 ? (completedTopicsCount / totalTopics) * 100 : 0;

                return {
                    id: course._id,
                    title: course.title,
                    description: course.description,
                    totalTopics,
                    completedTopics: completedTopicsCount,
                    progressPercentage,
                };
            })
        );

        const filteredCourses = courses.filter((course) => course !== null);

        res.json({courses: filteredCourses});
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({message: 'Server error'});
    }
};

exports.getCourseDetail = async (req, res) => {
    const userId = req.user._id;
    const courseId = req.params.courseId;
    console.log('Fetching course details for:', courseId);
    console.log('User ID:', userId);

    try {
        const course = await Course.findById(courseId).lean();
        if (!course) {
            return res.status(404).json({message: 'Course not found'});
        }

        // Get student's progress on this course
        const studentProgress = await StudentProgress.findOne({
            user_id: userId,
            course_id: courseId,
        });

        // Mark topics as completed or not
        const topics = course.topics.map((topic) => {
            const isCompleted = studentProgress
                ? studentProgress.completed_topics.includes(topic._id)
                : false;
            return {...topic, isCompleted};
        });

        // Calculate progress
        const totalTopics = course.topics.length;
        const completedTopicsCount = studentProgress
            ? studentProgress.completed_topics.length
            : 0;
        const progressPercentage =
            totalTopics > 0 ? (completedTopicsCount / totalTopics) * 100 : 0;

        res.json({
            course: {...course, topics},
            progress: {
                totalTopics,
                completedTopics: completedTopicsCount,
                progressPercentage,
            },
        });
    } catch (error) {
        console.error('Error fetching course detail:', error);
        res.status(500).json({message: 'Server error'});
    }
};
