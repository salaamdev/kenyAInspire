// models/event.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define(
    'Event',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_date: {
            type: DataTypes.DATE,
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
        tableName: 'events',
        timestamps: false,
    }
);

module.exports = Event;
