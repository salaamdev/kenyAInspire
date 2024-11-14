// backend/models/LessonPlan.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const LessonPlan = sequelize.define('LessonPlan', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    grade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    topic: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: 'lesson_plans',
    timestamps: false,
});

module.exports = LessonPlan;