const express = require('express');
const path = require('path')
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(__dirname + '/src/database.db', sqlite3.OPEN_READWRITE, (err) => { if (err) return console.error(err.message); });
var categoriesRows = [];



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.get('/category-page', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/category.html'));
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

//Gets products data
app.get('/api/products', (req, res) => {

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