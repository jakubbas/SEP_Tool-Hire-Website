const sqlite3 = require('sqlite3').verbose();
const path = require('path')
let sql;
const db = new sqlite3.Database(__dirname + '/src/database.db', sqlite3.OPEN_READWRITE, (err) => { if (err) return console.error(err.message); });
db.get("PRAGMA foreign_keys = ON")

//sql = 'CREATE TABLE categories(category_id INTEGER PRIMARY KEY,category_name TEXT,category_description TEXT,category_image TEXT,category_link TEXT)';
//db.run(sql);

//sql = 'CREATE TABLE products(product_id INTEGER PRIMARY KEY,product_name TEXT, product_description TEXT, category_id INTEGER, product_price_daily REAL, product_price_weekly REAL, product_image TEXT, product_link TEXT)';
//db.run(sql);

//db.run('drop table products');


//sql = 'INSERT INTO products(product_name,product_description,category_id, product_price_daily, product_price_weekly, product_image, product_link) VALUES (?,?,?,?,?,?,?)';
//db.run(sql, ["Hedge Trimmer", "Hedge Trimmer Description.", 5, 20, 80, '/images/hedge-trimmer.jpg', 'hedge-trimmer-link'], (err) => {
//    if (err) return console.error(err.message);
//});

//sql = 'UPDATE categories SET category_link = ? WHERE category_id = ?';
//db.run('UPDATE categories SET category_link = ? WHERE category_id = ?', ['/category-page?categoryID=5', 5], (err) => {
//    if (err) return console.error(err.message);
//});

//sql = 'UPDATE categories SET category_name = ? WHERE category_id = ?';
//db.run('UPDATE categories SET category_name = ? WHERE category_id = ?', ['Landscaping', 5], (err) => {
//    if (err) return console.error(err.message);
//});

//sql = 'UPDATE products SET product_image = ? WHERE product_id = ?';
//db.run('UPDATE products SET product_image = ? WHERE product_id = ?', ['/images/products-hedge-trimmer.jpg', 18], (err) => {
//    if (err) return console.error(err.message);
//});

//db.run(`
//  CREATE TABLE IF NOT EXISTS categories (
//    Category_ID INTEGER PRIMARY KEY,
//    Category_Name TEXT,
//    Category_Description TEXT,
//    Category_Image TEXT,
//    Category_Link TEXT
//  )
//`, (err) => {
//    if (err) {
//        console.error('Error creating categories table:', err.message);
//    } else {
//        console.log('Categories table created successfully.');
//    }

//    // Close the database connection
//    db.close();
//});


//sql = 'INSERT INTO categories(category_name,category_description,category_image,category_link) VALUES (?,?,?,?)';
//db.run(sql, ["Cutting", "Decorating Tools.", "imagelink", "categorylink"], (err) => {
//    if (err) return console.error(err.message);
//});


sql = 'SELECT * FROM categories';
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach(row => {
        console.log(row);
    })
});


//function GatherMainRows()
//{
//    db.all('SELECT * FROM categories', [], (err, rows) => {
//        if (err) {
//            console.error('Error executing query:', err.message);
//        } else {
//            // Process the retrieved rows
//            rows.forEach(row => {
//                console.log(1);
//                categoriesRows.push(row);
//            });
//        }
//        console.log(categoriesRows.length);
//        //console.log("Info from row 3:");
//        console.log(categoriesRows[2]);


//        //module.export = categoriesRows;

//        // Close the database connection
//    });

//}


//GatherMainRows();
