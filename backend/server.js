// server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import Sequelize instance
const sequelize = require('./config/database');

// Import middleware
const errorHandler = require('./middleware/errorHandler');

// Initialize Express app
const app = express();

// Use middleware
app.use(express.json());
app.use(cors());

// Import routes
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const progressRoutes = require('./routes/progressRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const eventRoutes = require('./routes/eventRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const userRoutes = require('./routes/userRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/protected', protectedRoutes);

// Error handler middleware (should be after all routes)
app.use(errorHandler);

// Test the database connection and sync models
sequelize.authenticate()
    .then(() => {
        console.log('Connection to SQLite has been established successfully.');

        // Import models to sync them
        const {
            User,
            Course,
            Topic,
            Enrollment,
            Progress,
            StudentTopicProgress,
            Announcement,
            Event,
            OTP,
        } = require('./models');

        // Sync all models
        return sequelize.sync(); // Use { force: true } for development to reset tables
    })
    .then(() => {
        // Start the server after successful DB connection
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${ PORT }`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
