const Progress = require('../models/progressModel');

exports.getProgressForStudent = async (req, res) => {
    const userId = req.user.id;

    try {
        const progressData = await Progress.find({user_id: userId});

        res.json({progress: progressData});
    } catch (error) {
        console.error('Error fetching progress:', error);
        res.status(500).json({message: 'Server error'});
    }
};
