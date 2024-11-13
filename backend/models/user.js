// models/User.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define(
  'User',
  {
    // Sequelize automatically adds an 'id' primary key field
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validates email format
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // New role field
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'student', // Default role is 'student'
      validate: {
        isIn: [['student', 'teacher']],
      },
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    failedQuestions: {
      type: DataTypes.TEXT, // Use TEXT to store JSON string
      allowNull: true,
      defaultValue: '[]', // Set default value as a JSON string
    },
  },
  {
    tableName: 'users',
    timestamps: false, // Disable automatic timestamp fields
  }
);

module.exports = User;
