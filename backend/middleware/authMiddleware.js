const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get token from header
    const token = req.header('Authorization')?.split(' ')[1];

    // Check if no token
    if (!token) {
        return res.status(401).json({message: 'No token, authorization denied'});
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Add user from payload
        req.user = decoded;
        next();
    } catch (err) {
        console.error('Auth Middleware Error:', err);
        res.status(401).json({message: 'Token is not valid'});
    }
};

module.exports = authMiddleware;
