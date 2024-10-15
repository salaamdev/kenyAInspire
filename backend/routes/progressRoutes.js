const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, progressController.getProgressForStudent);
router.get('/overall', authMiddleware, progressController.getOverallProgress); // New route
router.put(
    '/courses/:courseId/topics/:topicId',
    authMiddleware,
    progressController.updateTopicCompletion
);

module.exports = router;
