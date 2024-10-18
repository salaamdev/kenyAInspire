// models/otp.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const OTP = sequelize.define(
    'OTP',
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'otps',
        timestamps: false,
    }
);

module.exports = OTP;
