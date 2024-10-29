// backend/models/course.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define(
    'Course',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            // Ensure autoIncrement is disabled or removed
            // autoIncrement: true, // Remove this line if present
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'courses',
        timestamps: false,
    }
);

module.exports = Course;
