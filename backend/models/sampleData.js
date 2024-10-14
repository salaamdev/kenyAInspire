require('dotenv').config();
const mongoose = require('mongoose');
const faker = require('@faker-js/faker').faker;
const bcrypt = require('bcryptjs');

const User = require('./userModel');
const Course = require('./courseModel');
const Enrollment = require('./enrollmentModel');
const Progress = require('./progressModel');
const Announcement = require('./announcementModel');
const Event = require('./eventModel');

const connectDB = require('../config/db');

const createSampleData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    await Enrollment.deleteMany({});
    await Progress.deleteMany({});
    await Announcement.deleteMany({});
    await Event.deleteMany({});

    // Create sample users
    const users = [];
    for (let i = 0; i < 10; i++) {
      const user = new User({
        name: faker.person.fullName(),  // Updated method
        email: faker.internet.email(),
        password: await bcrypt.hash('password', 10),
      });
      await user.save();
      users.push(user);
    }

    // Create sample courses
    const courses = [];
    for (let i = 0; i < 20; i++) {
      const course = new Course({
        title: faker.lorem.words(3),
        description: faker.lorem.sentences(2),
      });
      await course.save();
      courses.push(course);
    }

    // Enroll users in courses
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < 2; j++) {
        const enrollment = new Enrollment({
          user: users[i]._id,
          course: courses[Math.floor(Math.random() * courses.length)]._id,
        });
        await enrollment.save();
      }
    }

    console.log('Sample data created successfully');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    mongoose.connection.close();
  }
};

createSampleData();
