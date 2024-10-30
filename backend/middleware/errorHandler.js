const errorHandler = (err, req, res, next) => {
    console.error('Error Handler:', err);

    // Handle Multer file upload errors
    if (err.name === 'MulterError') {
        return res.status(400).json({message: err.message});
    }

    // Handle Sequelize validation errors
    if (err.name === 'SequelizeValidationError') {
        const messages = err.errors.map((e) => e.message);
        return res.status(400).json({message: messages});
    }

    // Handle custom errors
    if (err.status && err.message) {
        return res.status(err.status).json({message: err.message});
    }

    // Default to 500 server error
    res.status(500).json({message: 'Server error'});
};

module.exports = errorHandler;
