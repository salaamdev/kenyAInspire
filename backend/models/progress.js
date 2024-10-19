// models/progress.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Progress = sequelize.define(
    'Progress',
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        course_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'courses',
                key: 'id',
            },
        },
        completed_modules: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        total_modules: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        last_updated: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'progress',
        timestamps: false,
    }
);

module.exports = Progress;
