const express = require('express');
const router = express.Router();
const flashcardController = require('../controllers/flashcardController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:courseId', authMiddleware, flashcardController.generateFlashcards);

module.exports = router;
