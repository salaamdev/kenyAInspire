const pool = require('../config/db');

// Get courses for a student
exports.getCoursesForStudent = async (req, res) => {
    const userId = req.user.id;
    try {
        const result = await pool.query(`
      SELECT c.id, c.title, c.description
      FROM courses c
      JOIN enrollments e ON c.id = e.course_id
      WHERE e.user_id = $1
    `, [userId]);
        res.json({courses: result.rows});
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({message: 'Server error'});
    }
};
