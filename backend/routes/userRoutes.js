// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

// Existing route
router.put('/profile', authMiddleware, userController.updateProfile);

// New route for enrollment
router.post('/enroll', authMiddleware, userController.enrollUserInCourse);

module.exports = router;
