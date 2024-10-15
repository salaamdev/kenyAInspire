const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const flashcardRoutes = require('./routes/flashcardRoutes');
const quizRoutes = require('./routes/quizRoutes');

// Import middleware
const errorHandler = require('./middleware/errorHandler');

// Initialize Express app
const app = express();

// Use middleware
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:5173', // Allow all origins
    optionsSuccessStatus: 200,
};

app.use(cors());
app.use(cors(corsOptions));
const chatbotRoutes = require('./routes/chatbotRoutes');
app.use('/api/chatbot', chatbotRoutes);

// Import routes
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const progressRoutes = require('./routes/progressRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const eventRoutes = require('./routes/eventRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/api/progress', progressRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/flashcards', flashcardRoutes); // Add this
app.use('/api/quizzes', quizRoutes); // Add this

// Error handler middleware (should be after all routes)
app.use(errorHandler);

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`);
});
