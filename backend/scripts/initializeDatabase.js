// backend/scripts/initializeDatabase.js

const sequelize = require('../config/database');
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

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to SQLite has been established successfully.');

        // Sync all models
        await sequelize.sync({force: true}); // 'force: true' will drop tables and re-create them

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

        console.log('Database initialized successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Unable to initialize the database:', error);
        process.exit(1);
    }
})();
