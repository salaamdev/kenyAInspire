const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Course = require('../models/courseModel');
const Enrollment = require('../models/enrollmentModel');

exports.register = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: 'Email already exists'});
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();

        // Enroll user in all courses
        const courses = await Course.find({});
        for (const course of courses) {
            const enrollment = new Enrollment({
                user_id: user._id,
                course_id: course._id,
            });
            await enrollment.save();
        }

        // Generate token
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.status(201).json({
            token,
            user: {id: user._id, name: user.name, email: user.email},
        });
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({message: 'Server error'});
    }
};

exports.login = async (req, res) => {
    const {email, password} = req.body;

    try {
        // Find user
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        // Generate token
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.status(200).json({token, user: {id: user._id, name: user.name, email: user.email}});
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({message: 'Server error'});
    }
};
