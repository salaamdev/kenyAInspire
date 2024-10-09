const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {createUser, findUserByEmail} = require('../models/userModel');

exports.register = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        // Check if user already exists
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({message: 'Email already exists'});
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await createUser(name, email, hashedPassword);

        // Generate token
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.status(201).json({token, user});
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({message: 'Server error'});
    }
};

exports.login = async (req, res) => {
    const {email, password} = req.body;

    try {
        // Find user
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        // Generate token
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        // Exclude password from response
        delete user.password;

        res.status(200).json({token, user});
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({message: 'Server error'});
    }
};
