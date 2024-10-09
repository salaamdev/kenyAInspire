const pool = require('../config/db');

// Get all announcements
exports.getAnnouncements = async (req, res) => {
    try {
        const result = await pool.query(`
      SELECT id, title, content, created_at
      FROM announcements
      ORDER BY created_at DESC
    `);
        res.json({announcements: result.rows});
    } catch (error) {
        console.error('Error fetching announcements:', error);
        res.status(500).json({message: 'Server error'});
    }
};
