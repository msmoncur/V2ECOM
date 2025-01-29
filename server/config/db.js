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

// // Load JSON Data
// const products = JSON.parse(fs.readFileSync('products.json', 'utf8'));

// products.forEach((product) => {
//     const { image, title, description, price } = product;

//     // Convert price to an integer in cents
//     const cleanedPrice = parseInt(price.replace('$', '').replace(',', ''));

//     // Insert product into the database
//     const query = `
//         INSERT INTO products (image, title, description, price)
//         VALUES (?, ?, ?, ?)
//     `;

//     connection.query(query, [image, title, description, cleanedPrice], (err) => {
//         if (err) throw err;
//         console.log(`Inserted: ${title}`);
//     });
// });

connection.connect(err => {
    if (err) {
        console.error('Failed to connect to the database:', err.stack);
        return;
    }
    console.log('Connected to Amazon RDS MySQL instance.');
});

module.exports = connection; 