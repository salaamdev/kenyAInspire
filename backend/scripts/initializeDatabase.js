// scripts/initializeDatabase.js

const sequelize = require('../config/database');
const {
    User,
    Course,
    Topic,
    Enrollment,
    Announcement,
    OTP,
} = require('../models');

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to SQLite has been established successfully.');

        // Sync all models
        await sequelize.sync({force: true}); // 'force: true' will drop tables and re-create them

        // Insert initial data here if needed
        // e.g., await Course.create({ title: 'Sample Course', description: 'This is a sample course.' });

        console.log('Database initialized successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Unable to initialize the database:', error);
        process.exit(1);
    }
})();
