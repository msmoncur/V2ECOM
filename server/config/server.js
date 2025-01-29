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

app.use(express.static('client')); //location of static files 

//Serve Static Images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Products Page Route
app.get('/api/products', (req, res) => {
    const query = 'SELECT * FROM products';
    connection.query(query, (err, results) => {
        if (err) throw err;

        const baseURL = `http://localhost:${PORT}`; // Adjust the base URL if needed
        const products = results.map(product => ({
            ...product,
            image_url: `${baseURL}/images/${product.image}`, // Add full image URL
        }));

        res.json(products); // Return JSON response
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 