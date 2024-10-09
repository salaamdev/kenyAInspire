const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const courseController = require('../controllers/courseController');

// Get courses for a student
router.get('/', authMiddleware, courseController.getCoursesForStudent);

module.exports = router;
