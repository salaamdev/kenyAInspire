const mongoose = require('mongoose');
const Course = require('../models/courseModel');
const Enrollment = require('../models/enrollmentModel');
const Progress = require('../models/progressModel');
const StudentProgress = require('../models/studentProgressModel');

exports.getCoursesForStudent = async (req, res) => {
    const userId = req.user._id; // Use _id instead of id

    try {
        console.log('Fetching courses for user:', userId);

        // Find enrollments
        const enrollments = await Enrollment.find({user_id: userId}).populate('course_id');
        console.log('Enrollments:', enrollments);

        let courses = [];

        if (enrollments.length > 0) {
            // Get progress for each course
            courses = await Promise.all(
                enrollments.map(async (enrollment) => {
                    try {
                        const course = enrollment.course_id;

                        if (!course) {
                            console.error('Course not found for enrollment:', enrollment);
                            return null;
                        }

                        const progress = await Progress.findOne({
                            user_id: userId,
                            course_id: course._id,
                        });

                        return {
                            id: course._id,
                            title: course.title,
                            description: course.description,
                            completed_modules: progress ? progress.completed_modules : 0,
                            total_modules: progress ? progress.total_modules : 0,
                        };
                    } catch (err) {
                        console.error('Error in enrollment mapping:', err);
                        return null;
                    }
                })
            );

            // Remove any null values (in case of errors)
            courses = courses.filter((course) => course !== null);
        } else {
            console.log('No enrollments found for user:', userId);

            // If no enrollments, return all courses
            const allCourses = await Course.find({});
            courses = allCourses.map((course) => ({
                id: course._id,
                title: course.title,
                description: course.description,
                completed_modules: 0,
                total_modules: 0,
            }));
        }

        res.json({courses});
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
