// routes/instructorRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const instructorController = require('../controllers/instructorController');

router.get('/dashboard', authMiddleware, (req, res, next) => {
    if (req.user.role !== 'teacher') {
        return res.status(403).json({message: 'Access denied'});
    }
    // Proceed to handle the request
    instructorController.getDashboard(req, res, next);
});

module.exports = router;
