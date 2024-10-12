const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

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
        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(401).json({message: 'User not found'});
        }

        // Add user to request
        req.user = user;
        next();
    } catch (err) {
        console.error('Auth Middleware Error:', err);
        res.status(401).json({message: 'Token is not valid'});
    }
};

module.exports = authMiddleware;
