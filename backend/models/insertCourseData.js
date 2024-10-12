require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./courseModel');

const connectDB = require('../config/db');

const insertCourseData = async () => {
    try {
        await connectDB();

        // Clear existing courses
        await Course.deleteMany({});

        // Define courses with topics and detailed content
        const courses = [
            {
                title: 'Mathematics',
                description: 'An in-depth mathematics course covering various topics.',
                topics: [
                    {
                        title: 'Algebra',
                        content: 'Algebra involves the study of mathematical symbols and the rules for manipulating these symbols.',
                    },
                    {
                        title: 'Geometry',
                        content: 'Geometry is concerned with the properties and relations of points, lines, surfaces, and solids.',
                    },
                    {
                        title: 'Calculus',
                        content: 'Calculus is the mathematical study of continuous change.',
                    },
                    // Add more topics as needed
                ],
            },
            {
                title: 'English Language',
                description: 'A comprehensive course on English grammar, literature, and composition.',
                topics: [
                    {
                        title: 'Grammar',
                        content: 'Grammar is the set of structural rules governing the composition of clauses, phrases, and words.',
                    },
                    {
                        title: 'Literature',
                        content: 'Literature encompasses written works, especially those considered of superior or lasting artistic merit.',
                    },
                    // Add more topics as needed
                ],
            },
            // Add more courses with topics
        ];

        // Insert courses into the database
        await Course.insertMany(courses);

        console.log('Courses with topics inserted successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error inserting course data:', error);
        process.exit(1);
    }
};

insertCourseData();
