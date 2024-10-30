// controllers/userController.js

const {User} = require('../models');
const bcrypt = require('bcrypt');

exports.updateProfile = async (req, res) => {
    const userId = req.user.id;
    const {name, email, password} = req.body;

    try {
        const updateData = {name, email};

        // Update password if provided
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;
        }

        const [updatedRowsCount] = await User.update(updateData, {
            where: {id: userId},
        });

        if (updatedRowsCount === 0) {
            return res.status(404).json({message: 'User not found'});
        }

        res.json({message: 'Profile updated successfully'});
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({message: 'Server error'});
    }
};
