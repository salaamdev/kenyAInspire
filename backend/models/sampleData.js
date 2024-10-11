require('dotenv').config();
const pool = require('../config/db');
const faker = require('faker');

const createSampleData = async () => {
  try {
    // Generate and insert sample courses
    const courses = [];
    for (let i = 0; i < 100; i++) {
      courses.push(`('${ faker.lorem.words(3) }', '${ faker.lorem.sentences(2) }')`);
    }
    await pool.query(`
      INSERT INTO courses (title, description) VALUES
      ${ courses.join(', ') };
    `);

    // Generate and insert sample progress
    const progress = [];
    for (let i = 0; i < 1000; i++) {
      const userId = faker.datatype.number({min: 1, max: 10});
      const courseId = faker.datatype.number({min: 1, max: 100});
      const completedModules = faker.datatype.number({min: 0, max: 10});
      const totalModules = 10; // Assuming each course has 10 modules
      progress.push(`(${ userId }, ${ courseId }, ${ completedModules }, ${ totalModules })`);
    }
    await pool.query(`
      INSERT INTO progress (user_id, course_id, completed_modules, total_modules) VALUES
      ${ progress.join(', ') };
    `);

    console.log('Sample data inserted successfully');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  }
};

createSampleData();
