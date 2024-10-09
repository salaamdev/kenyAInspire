// Import dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import middleware
const errorHandler = require('./middleware/errorHandler');

// Initialize Express app
const app = express();

// Use middleware
app.use(express.json());
app.use(cors());

// Import routes
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const progressRoutes = require('./routes/progressRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const eventRoutes = require('./routes/eventRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');


// Use routes
app.use('/api/progress', progressRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/recommendations', recommendationRoutes);



// Error handler middleware (should be after all routes)
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`);
});
