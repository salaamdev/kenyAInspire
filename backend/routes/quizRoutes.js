const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:courseId', authMiddleware, quizController.generateQuiz);

module.exports = router;
