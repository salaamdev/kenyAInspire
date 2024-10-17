const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
    email: {type: String, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    otp: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, expires: 600}, // Document expires after 10 minutes
});

module.exports = mongoose.model('OTP', OTPSchema);
