const pool = require('../config/db');

// Get progress data for a student
exports.getProgressForStudent = async (req, res) => {
    const userId = req.user.id;
    try {
        const result = await pool.query(`
      SELECT p.course_id, p.completed_modules, p.total_modules
      FROM progress p
      WHERE p.user_id = $1
    `, [userId]);
        res.json({progress: result.rows});
    } catch (error) {
        console.error('Error fetching progress:', error);
        res.status(500).json({message: 'Server error'});
    }
};
