// models/course.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define(
    'Course',
    {
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
