// controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, OTP} = require('../models');
const nodemailer = require('nodemailer');
const {validationResult} = require('express-validator');
require('dotenv').config();

/**
 * @desc    Register a new user (Step 1: Send OTP)
 * @route   POST /api/auth/register
 * @access  Public
 */
exports.register = async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {name, email, password, action} = req.body;

    if (action !== 'request_otp') {
        return res.status(400).json({message: 'Invalid action'});
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({where: {email}});
        if (existingUser) {
            return res.status(400).json({message: 'Email already exists'});
        }

        // Generate 6-digit OTP
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save OTP along with name and hashed password
        await OTP.create({
            email,
            name,
            password: hashedPassword,
            otp: otpCode,
            createdAt: new Date(),
        });

        // Send OTP via email
        await sendOTPEmail(email, otpCode);

        res.status(200).json({message: 'OTP sent to email'});
    } catch (error) {
        console.error('OTP Error:', error);
        res.status(500).json({message: 'Server error'});
    }
};

/**
 * @desc    Verify OTP and complete registration
 * @route   POST /api/auth/verify-otp
 * @access  Public
 */
exports.verifyOTP = async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, otp} = req.body;

    try {
        // Find OTP entry
        const otpEntry = await OTP.findOne({where: {email, otp}});
        if (!otpEntry) {
            return res.status(400).json({message: 'Invalid OTP'});
        }

        // Check if OTP is expired (valid for 10 minutes)
        const now = new Date();
        const otpAge = now - otpEntry.createdAt;
        if (otpAge > 10 * 60 * 1000) {
            return res.status(400).json({message: 'OTP expired'});
        }

        // Create user
        const user = await User.create({
            name: otpEntry.name,
            email: otpEntry.email,
            password: otpEntry.password, // Already hashed
        });

        // Generate JWT token with shorter expiry and implement refresh tokens in future
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
            expiresIn: '1h', // Reduced from '1d'
        });

        // Delete OTP entry
        await OTP.destroy({where: {id: otpEntry.id}});

        // Respond with token and user data
        res.status(201).json({
            token,
            user: {id: user.id, name: user.name, email: user.email, role: user.role},
        });
    } catch (error) {
        console.error('OTP Verification Error:', error);
        res.status(500).json({message: 'Server error'});
    }
};

/**
 * @desc    Send OTP Email
 */
async function sendOTPEmail (email, otp) {
    // Create transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email provider
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS, // Your email password or app password
        },
    });

    // Email options
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'KenyAInspire OTP Verification',
        text: `Your OTP code is ${ otp }. It is valid for 10 minutes.`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
}

/**
 * @desc    Login user
 * @route   POST /api/auth/login
 * @access  Public
 */
exports.login = async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    try {
        // Find user by email
        const user = await User.findOne({where: {email}});
        if (!user) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        // Generate JWT token
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
            expiresIn: '1h', // Reduced from '1d'
        });

        // Respond with token, user data, and role
        res.status(200).json({
            token,
            user: {id: user.id, name: user.name, email: user.email, role: user.role},
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({message: 'Server error'});
    }
};
