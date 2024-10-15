const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, courseController.getCoursesForStudent);
router.get('/:courseId', authMiddleware, courseController.getCourseDetail); // New route

module.exports = router;
