const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Course = require('../models/courseModel');
const Enrollment = require('../models/enrollmentModel');
const OTP = require('../models/otpModel'); // Create this model
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');

/**
 * @desc    Register a new user (Step 1: Send OTP)
 * @route   POST /api/auth/register
 * @access  Public
 */
exports.register = async (req, res) => {
    const {name, email, password, action} = req.body;

    if (action === 'request_otp') {
        try {
            // Check if user already exists
            const existingUser = await User.findOne({email});
            if (existingUser) {
                return res.status(400).json({message: 'Email already exists'});
            }

            // Generate OTP
            const otpCode = otpGenerator.generate(6, {upperCaseAlphabets: false, specialChars: false});

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Save OTP along with name and hashed password
            const otpEntry = new OTP({
                email,
                name,
                password: hashedPassword,
                otp: otpCode,
                createdAt: new Date(),
            });
            await otpEntry.save();

            // Send OTP via email
            await sendOTPEmail(email, otpCode);

            res.status(200).json({message: 'OTP sent to email'});
        } catch (error) {
            console.error('OTP Error:', error);
            res.status(500).json({message: 'Server error'});
        }
    }
};


/**
 * @desc    Verify OTP and complete registration
 * @route   POST /api/auth/verify-otp
 * @access  Public
 */
exports.verifyOTP = async (req, res) => {
    const {email, otp} = req.body;

    try {
        // Find OTP entry
        const otpEntry = await OTP.findOne({email, otp});
        if (!otpEntry) {
            return res.status(400).json({message: 'Invalid OTP'});
        }

        // Check if OTP is expired (valid for 10 minutes)
        const now = new Date();
        if (now - otpEntry.createdAt > 10 * 60 * 1000) {
            return res.status(400).json({message: 'OTP expired'});
        }

        // Create user
        const user = new User({
            name: otpEntry.name,
            email: otpEntry.email,
            password: otpEntry.password, // Already hashed
        });
        await user.save();

        // Enroll user in all existing courses
        const courses = await Course.find({});
        const enrollmentPromises = courses.map((course) => {
            const enrollment = new Enrollment({
                user_id: user._id,
                course_id: course._id,
            });
            return enrollment.save();
        });
        await Promise.all(enrollmentPromises);

        // Generate JWT token
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        // Delete OTP entry
        await OTP.deleteOne({_id: otpEntry._id});

        // Respond with token and user data
        res.status(201).json({
            token,
            user: {id: user._id, name: user.name, email: user.email},
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
    const {email, password} = req.body;

    try {
        // Find user by email
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        // Generate JWT token
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        // Respond with token and user data
        res.status(200).json({
            token,
            user: {id: user._id, name: user.name, email: user.email},
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({message: 'Server error'});
    }
};
