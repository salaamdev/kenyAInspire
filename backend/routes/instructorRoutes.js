// backend/routes/instructorRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const instructorController = require('../controllers/instructorController');
const {check, validationResult} = require('express-validator');

router.get('/dashboard', authMiddleware, (req, res, next) => {
    if (req.user.role !== 'teacher') {
        return res.status(403).json({message: 'Access denied'});
    }
    // Proceed to handle the request
    instructorController.getDashboard(req, res, next);
});


// Get all assignments
router.get('/assignments', authMiddleware, instructorController.getAssignments);

// Create assignment
router.post('/assignments', authMiddleware, instructorController.createAssignment);

// Get submissions for an assignment
router.get('/assignments/:assignmentId/submissions', authMiddleware, instructorController.getSubmissions);

router.get('/submissions/:submissionId', authMiddleware, instructorController.getSubmission);
router.post('/submissions/:submissionId/grade', authMiddleware, instructorController.submitGrade);

router.get('/recent-activity', authMiddleware, instructorController.getRecentActivity);
router.get('/upcoming-assignments', authMiddleware, instructorController.getUpcomingAssignments);
router.get('/class-performance', authMiddleware, instructorController.getClassPerformance);

module.exports = router;
