// routes/courseRoutes.js

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const flashcardController = require('../controllers/flashcardController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, courseController.getCoursesForStudent);
router.get('/:courseId', authMiddleware, courseController.getCourseDetail);
router.get('/:courseId/flashcards', authMiddleware, flashcardController.generateFlashcards); // New route

module.exports = router;
