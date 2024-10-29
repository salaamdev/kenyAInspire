// routes/AI/flashcardsRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const flashcardsController = require('../../controllers/AI/flashcardsController');

// @route   POST /api/ai/flashcards/generate
// @desc    Generate flashcards for a course
// @access  Private
router.post('/generate', authMiddleware, flashcardsController.generateFlashcards);

// @route   GET /api/ai/flashcards/:course_id
// @desc    Get flashcards for a course
// @access  Private
router.get('/:course_id', authMiddleware, flashcardsController.getFlashcards);

module.exports = router;
