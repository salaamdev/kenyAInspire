// scripts/initializeDatabase.js

const sequelize = require('../config/database');
const {User, Announcement, OTP, Question, UserQuestion} = require('../models');


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to SQLite has been established successfully.');

        // Sync all models
        await sequelize.sync({force: true}); // 'force: true' will drop tables and re-create them

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

        console.log('Database initialized successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Unable to initialize the database:', error);
        process.exit(1);
    }
})();
