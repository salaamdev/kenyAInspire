const pool = require('../config/db');

// Get courses for a student, including progress
exports.getCoursesForStudent = async (req, res) => {
    const userId = req.user.id;
    try {
        const result = await pool.query(`
          SELECT c.id, c.title, c.description,
                 p.completed_modules, p.total_modules
          FROM courses c
          JOIN enrollments e ON c.id = e.course_id
          LEFT JOIN progress p ON c.id = p.course_id AND p.user_id = $1
          WHERE e.user_id = $1
        `, [userId]);
        console.log("Fetched courses from DB:", result.rows); // Add this line
        res.status(500).json({message: 'Server error'});
    }
    catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({message: 'Server error'});
    }
};
