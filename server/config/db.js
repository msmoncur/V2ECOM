const mysql = require('mysql2');
const dotenv = require('dotenv');

//initializes env file 
dotenv.config();

//database connection settings 
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306,
    ssl: { rejectUnauthorized: true }
});

// Connect to MySQL
connection.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to RDS MySQL database.');
});

module.exports = connection; 