const pool = require('../config/db');

// Get all events
exports.getEvents = async (req, res) => {
    try {
        const result = await pool.query(`
      SELECT id, title, event_date, description
      FROM events
      WHERE event_date >= CURRENT_DATE
      ORDER BY event_date ASC
    `);
        res.json({events: result.rows});
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({message: 'Server error'});
    }
};
