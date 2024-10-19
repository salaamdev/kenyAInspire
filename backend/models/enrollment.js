// models/enrollment.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Enrollment = sequelize.define(
    'Enrollment',
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'courses',
                key: 'id',
            },
        },
        enrolled_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'enrollments',
        timestamps: false,
    }
);

module.exports = Enrollment;
