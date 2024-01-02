const express = require('express');
const path = require('path')
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(__dirname + '/src/database.db', sqlite3.OPEN_READWRITE, (err) => { if (err) return console.error(err.message); });
var categoriesRows = [];



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use(express.static(__dirname + '/public'));

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



app.listen(8080, () => { 
    console.log('Server is listening on port 8080');
});