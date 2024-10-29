// models/flashcard.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Flashcard = sequelize.define(
    'Flashcard',
    {
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'courses',
                key: 'id',
            },
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        answer: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'flashcards',
        timestamps: false,
    }
);

module.exports = Flashcard;
