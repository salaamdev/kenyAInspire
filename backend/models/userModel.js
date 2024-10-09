const pool = require('../config/db');

// Function to create the users table if it doesn't exist
const createUserTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
    await pool.query(query);
};

// Call the function to create the table
createUserTable();

module.exports = {
    // Function to insert a new user
    createUser: async (name, email, hashedPassword) => {
        const query = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, name, email;
    `;
        const values = [name, email, hashedPassword];
        const res = await pool.query(query, values);
        return res.rows[0];
    },

    // Function to find a user by email
    findUserByEmail: async (email) => {
        const query = `
      SELECT * FROM users WHERE email = $1;
    `;
        const values = [email];
        const res = await pool.query(query, values);
        return res.rows[0];
    },
};
