// backend/scripts/initializeDatabase.js

const sequelize = require('../config/database');
<<<<<<< HEAD
const {User, Announcement, OTP} = require('../models');
=======
const {
    User,
    Course,
    Topic,
    Enrollment,
    Announcement,
    OTP,
    Flashcard,
} = require('../models');
const coursesData = require('./coursesData'); // Newly added
>>>>>>> b5159c762df1ce3d3408838d28cb11c41fa27100

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to SQLite has been established successfully.');

        // Sync all models
        await sequelize.sync({force: true}); // 'force: true' will drop tables and re-create them

<<<<<<< HEAD
        // Insert initial data for Announcements
        await Announcement.bulkCreate([
            {
                title: 'Welcome to KenyAInspire!',
                content: 'We are excited to have you onboard. Explore our courses and start learning today!',
            },
            {
                title: 'New Feature Released',
                content: 'Check out our new AI-powered flashcards to enhance your learning experience.',
            },
            {
                title: 'Scheduled Maintenance',
                content: 'Our platform will undergo maintenance on Sunday from 2 AM to 4 AM. Please plan accordingly.',
            },
        ]);
=======
        // Insert courses from coursesData
        for (const grade of coursesData) {
            for (const subject of grade.subjects) {
                await Course.create({
                    id: subject.course_id, // Manually setting the ID
                    title: subject.name,
                    description: `${ subject.name } course for ${ grade.grade }`,
                    created_at: new Date(),
                });
            }
        }

        // Insert other initial data if necessary
        // e.g., announcements, users, etc.
>>>>>>> b5159c762df1ce3d3408838d28cb11c41fa27100

        console.log('Database initialized successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Unable to initialize the database:', error);
        process.exit(1);
    }
})();
