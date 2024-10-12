const pool = require('../config/db');

const insertSampleData = async () => {
    try {
        // Insert sample users
        await pool.query(`
      INSERT INTO users (name, email, password) VALUES
      ('John Doe', 'john@example.com', 'hashedpassword1'),
      ('Jane Smith', 'jane@example.com', 'hashedpassword2');
    `);

        // Insert sample courses
        await pool.query(`
      INSERT INTO courses (title, description) VALUES
      ('Mathematics', 'A course about numbers and equations.'),
      ('Physics', 'Understanding the laws of nature.'),
      ('History', 'Learning about past events.');
    `);

        // Get user IDs
        const userResult = await pool.query(`SELECT id FROM users;`);
        const [user1, user2] = userResult.rows;

        // Enroll users in courses
        await pool.query(`
      INSERT INTO enrollments (user_id, course_id) VALUES
      (${ user1.id }, 1),
      (${ user1.id }, 2),
      (${ user2.id }, 2),
      (${ user2.id }, 3);
    `);

        // Insert progress data
        await pool.query(`
      INSERT INTO progress (user_id, course_id, completed_modules, total_modules) VALUES
      (${ user1.id }, 1, 5, 10),
      (${ user1.id }, 2, 3, 8),
      (${ user2.id }, 2, 4, 8),
      (${ user2.id }, 3, 2, 5);
    `);

        console.log('Sample data inserted successfully');
    } catch (error) {
        console.error('Error inserting sample data:', error);
    }
};

insertSampleData();
