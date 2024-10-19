const User = require('../models/user');
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

        await User.findByIdAndUpdate(userId, updateData);

        res.json({message: 'Profile updated successfully'});
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({message: 'Server error'});
    }
};
