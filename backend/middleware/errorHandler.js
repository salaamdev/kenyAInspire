const errorHandler = (err, req, res, next) => {
    console.error('Error Handler:', err);
    res.status(500).json({message: 'Server error'});
};

module.exports = errorHandler;
