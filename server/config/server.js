const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

//database connection settings 
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

console.log('PORT:', process.env.PORT);
console.log('DB_HOST:', process.env.DB_HOST);


app.use(express.static(path.join(__dirname, '../../client/dist')));
//location of static files 

const cors = require('cors');

// Add this near the top of your server.js, before your routes
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'], // Add your frontend dev server ports
    credentials: true
}));

//Serve Static Images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Products Page Route
app.get('/api/products', (req, res) => {
    const query = 'SELECT * FROM products';
    connection.query(query, (err, results) => {
        if (err) throw err;

        const products = results.map(product => ({
            ...product,
            image_url: `/images/${product.image}`, // Add full image URL
        }));

        res.json(products); // Return JSON response
    });
});

app.get('*', (req, res) => {
    if (req.originalUrl.startsWith('/api') || req.originalUrl.startsWith('/images')) {
        return next(); // Allow API and image routes to work
    }
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
