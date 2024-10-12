const jwt = require('jsonwebtoken');
const pool = require('../config/db');

const authMiddleware = async (req, res, next) => {
    // Get token from header
    const token = req.headers['authorization']?.split(' ')[1];

    // Check if no token
    if (!token) {
        return res.status(401).json({message: 'No token provided'});
    }

    try {
        // Verify token
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(401).json({message: 'Failed to authenticate token'});
            }

            // Fetch user details from the database
            const result = await pool.query('SELECT id, name, email FROM users WHERE id = $1', [decoded.id]);
            const user = result.rows[0];

            if (!user) {
                return res.status(401).json({message: 'User not found'});
            }

            // Add user to request
            req.user = {
                id: user.id,
                name: user.name,
                email: user.email
            };
            next();
        });
    } catch (err) {
        console.error('Auth Middleware Error:', err);
        res.status(401).json({message: 'Token is not valid'});
    }
};

module.exports = authMiddleware;
