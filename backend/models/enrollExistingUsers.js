require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./userModel');
const Course = require('./courseModel');
const Enrollment = require('./enrollmentModel');

const connectDB = require('../config/db');

const enrollUsers = async () => {
    try {
        await connectDB();

        const users = await User.find({});
        const courses = await Course.find({});

        for (const user of users) {
            for (const course of courses) {
                // Check if the user is already enrolled
                const existingEnrollment = await Enrollment.findOne({
                    user_id: user._id,
                    course_id: course._id,
                });
                if (!existingEnrollment) {
                    const enrollment = new Enrollment({
                        user_id: user._id,
                        course_id: course._id,
                    });
                    await enrollment.save();
                }
            }
        }

        console.log('All users enrolled in all courses');
        process.exit(0);
    } catch (error) {
        console.error('Error enrolling users:', error);
        process.exit(1);
    }
};

enrollUsers();
