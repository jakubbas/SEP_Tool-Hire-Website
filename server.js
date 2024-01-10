const express = require('express');
const path = require('path')
const app = express();
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const db = new sqlite3.Database(__dirname + '/src/database.db', sqlite3.OPEN_READWRITE, (err) => { if (err) return console.error(err.message); });
var currentCategory;
var currentProduct;

app.use(bodyParser.json());

app.post('/review-submit', (req, res) => {

    const jsonData = req.body;

    res.json({ success: true, message: 'JSON delivered.' });

    //console.log(jsonData, "Here");
    const sql = 'INSERT INTO reviews(product_id, review_username, review_description, review_performance_rating, review_customer_service_rating, review_support_service_rating, review_after_sale_support_service_rating, review_date, review_approval) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const parameters = [currentProduct, jsonData.key1, jsonData.key2, jsonData.key3, jsonData.key4, jsonData.key5, jsonData.key6, jsonData.key7, false]

    db.run(sql, parameters, (err) => {
        if (err) return console.error(err.message);
    });
});

app.post('/reply-submit', (req, res) => {

    const jsonData = req.body;

    res.json({ success: true, message: 'JSON delivered.' });

    //console.log(jsonData, "Here");
    const sql = 'INSERT INTO replies(review_id, reply_username, reply_description, reply_approval, product_id) VALUES(?, ?, ?, ?, ?)';
    const parameters = [jsonData.key1, jsonData.key2, jsonData.key3, false, jsonData.key4]

    db.run(sql, parameters, (err) => {
        if (err) return console.error(err.message);
    });
});

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

//Gets review data based on product id and approval.
app.get('/api/reviews', (req, res) => {

    db.all('SELECT * FROM reviews WHERE product_id = ? AND review_approval = ?', [currentProduct, 1], (err, rows) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});

//Gets reply data based on product id and approval. This will then get sorted by review once all the data is passed through.
app.get('/api/replies', (req, res) => {

    db.all('SELECT * FROM replies WHERE product_id = ? AND reply_approval = ?', [currentProduct, 1], (err, rows) => {
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