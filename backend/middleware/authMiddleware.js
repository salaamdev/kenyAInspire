// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const {User} = require('../models');
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
    // Get token from header
    const token = req.header('Authorization')?.split(' ')[1];

    // Check if no token
    if (!token) {
        return res.status(401).json({message: 'No token, authorization denied'});
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch user details from the database
        const user = await User.findByPk(decoded.id);

        if (!user) {
            return res.status(401).json({message: 'User not found'});
        }

        // Attach user to the request with role included
        req.user = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role, // Include the role
        };

        next();
    } catch (err) {
        console.error('Auth Middleware Error:', err);
        res.status(401).json({message: 'Token is not valid'});
    }
};

module.exports = authMiddleware;
