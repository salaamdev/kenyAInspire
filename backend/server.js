// server.js
const helmet = require('helmet');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

// Import Sequelize instance
const sequelize = require('./config/database');

// Import middleware
const errorHandler = require('./middleware/errorHandler');

// Initialize Express app
const app = express();

// Configure multer for file uploads
const upload = multer({dest: 'uploads/'});

// Use middleware
app.use(helmet());
app.use(express.json());
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true, // If you need to send cookies or authentication headers
}));

// Import routes
const authRoutes = require('./routes/authRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const userRoutes = require('./routes/userRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const flashcardRoutes = require('./routes/flashcardRoutes');
const quizRoutes = require('./routes/quizRoutes');

app.use('/api/instructor', require('./routes/instructorRoutes'));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/flashcards', flashcardRoutes);
app.use('/api/quiz', quizRoutes);


// Error handler middleware (should be after all routes)
app.use(errorHandler);

// Test the database connection and sync models
sequelize.authenticate()
    .then(() => {
        console.log('Connection to SQLite has been established successfully.');

        // Import models to sync them
        const {User, Announcement, OTP} = require('./models');

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



