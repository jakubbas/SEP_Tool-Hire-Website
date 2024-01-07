const express = require('express');
const path = require('path')
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(__dirname + '/src/database.db', sqlite3.OPEN_READWRITE, (err) => { if (err) return console.error(err.message); });
var currentCategory;
var currentProduct;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.get('/category-page', (req, res) => {
    //DEBUG STATEMENT HERE FOR TEST LOG
    const categoryID = req.query.categoryID;
    //console.log("ID: ", categoryID)
    currentCategory = categoryID;
    res.sendFile(path.join(__dirname, '/public/category.html'));
});

app.get('/product-page', (req, res) => {
    console.log("here");
    //DEBUG STATEMENT HERE FOR TEST LOG
    const productID = req.query.productID;
    //console.log("ID: ", productID)
    currentProduct = productID;
    res.sendFile(path.join(__dirname, '/public/product.html'));
});


app.use(express.static(__dirname + '/public'));

//Gets categories data.
app.get('/api/categories', (req, res) => {

    db.all('SELECT * FROM categories', (err, rows) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});

//Gets select products data
app.get('/api/products', (req, res) => {

    //console.log("ID after: ", currentCategory);

    db.all('SELECT * FROM products WHERE category_id = ?', [currentCategory], (err, rows) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });

});

//Gets single product data
app.get('/api/products/single', (req, res) => {

    db.all('SELECT * FROM products WHERE product_id = ?', [currentProduct], (err, rows) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});

//Gets all products data
app.get('/api/products/all', (req, res) => {

    db.all('SELECT * FROM products', (err, rows) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });

});


app.listen(8080, () => { 
    console.log('Server is listening on port 8080');
});