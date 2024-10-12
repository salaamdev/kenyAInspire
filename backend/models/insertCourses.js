require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./courseModel');

const connectDB = require('../config/db');

const insertCourses = async () => {
    try {
        await connectDB();

        // Define your real courses here
        const courses = [
            {
                title: 'Mathematics',
                description: 'Comprehensive mathematics course covering arithmetic, algebra, geometry, and calculus.',
            },
            {
                title: 'English Language',
                description: 'Course focusing on grammar, composition, and literature in English.',
            },
            {
                title: 'Kiswahili',
                description: 'Learn Kiswahili language, grammar, and literature.',
            },
            {
                title: 'Science',
                description: 'An exploration of biology, chemistry, physics, and environmental science.',
            },
            {
                title: 'Social Studies',
                description: 'Study of history, geography, civics, and current affairs.',
            },
            {
                title: 'Religious Education',
                description: 'Understanding of various religious beliefs and moral education.',
            },
            {
                title: 'Physical Education',
                description: 'Physical activities promoting fitness and health.',
            },
            {
                title: 'Art and Craft',
                description: 'Development of artistic skills and creativity through various art forms.',
            },
            {
                title: 'Music',
                description: 'Introduction to music theory, instruments, and performance.',
            },
            {
                title: 'Home Science',
                description: 'Learning about nutrition, family health, and home management.',
            },
        ];

        // Clear existing courses
        await Course.deleteMany({});

        // Insert courses into the database
        await Course.insertMany(courses);

        console.log('Courses inserted successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error inserting courses:', error);
        process.exit(1);
    }
};

insertCourses();
