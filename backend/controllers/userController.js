const pool = require('../config/db');
const bcrypt = require('bcrypt');

exports.updateProfile = async (req, res) => {
    const userId = req.user.id;
    const {name, email, password} = req.body;

    try {
        // Update name and email
        await pool.query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3',
            [name, email, userId]
        );

        // Update password if provided
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            await pool.query(
                'UPDATE users SET password = $1 WHERE id = $2',
                [hashedPassword, userId]
            );
        }

        res.json({message: 'Profile updated successfully'});
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({message: 'Server error'});
    }
};
