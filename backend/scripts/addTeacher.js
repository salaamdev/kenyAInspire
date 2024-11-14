// scripts/addTeacher.js

const bcrypt = require('bcrypt');
const {User} = require('../models');
const sequelize = require('../config/database');

(async () => {
    try {
        await sequelize.authenticate();

        const name = 'Teacher Name'; // Replace with actual name or prompt for input
        const email = 'teacher@example.com'; // Replace with actual email
        const password = 'securepassword'; // Replace with actual password

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword,
            role: 'teacher',
        });

        console.log('Teacher account created successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Error creating teacher account:', error);
        process.exit(1);
    }
})();
