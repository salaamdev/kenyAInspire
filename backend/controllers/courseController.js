const mongoose = require('mongoose');
const Course = require('../models/courseModel');
const Enrollment = require('../models/enrollmentModel');
const Progress = require('../models/progressModel');

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
