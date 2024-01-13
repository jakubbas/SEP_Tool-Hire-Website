const sqlite3 = require('sqlite3').verbose();
const path = require('path')
let sql;
const db = new sqlite3.Database(__dirname + '/src/database.db', sqlite3.OPEN_READWRITE, (err) => { if (err) return console.error(err.message); });
db.get("PRAGMA foreign_keys = ON")



//sql = 'UPDATE categories SET category_image = ? WHERE category_id = ?';
//db.run('UPDATE categories SET category_image = ? WHERE category_id = ?', ['/images/products-hedge-trimmer.jpg', 5], (err) => {
//    if (err) return console.error(err.message);
//});


//Prints out all the values from the provided table. Change the table name to either: categories, products, reviews or replies.


//
//
//                         STATEMENTS TO PRINT OUT EACH TABLE, UNCOMMENT THE TABLES YOU WANT TO BE DISPLAYED IN THE COMMAND LINE.
//
//

//Prints out categories
//sql = 'SELECT * FROM categories';
//db.all(sql, [], (err, rows) => {
//    if (err) return console.error(err.message);
//    rows.forEach(row => {
//        console.log(row);
//    })
//});

//Prints out products
//sql = 'SELECT * FROM products';
//db.all(sql, [], (err, rows) => {
//    if (err) return console.error(err.message);
//    rows.forEach(row => {
//        console.log(row);
//    })
//});

//Prints out reviews
//sql = 'SELECT * FROM reviews';
//db.all(sql, [], (err, rows) => {
//    if (err) return console.error(err.message);
//    rows.forEach(row => {
//        console.log(row);
//    })
//});

//Prints out all unauthorised reviews
//sql = 'SELECT * FROM reviews WHERE review_approval = ?';
//db.all(sql, [0], (err, rows) => {
//    if (err) return console.error(err.message);
//    rows.forEach(row => {
//        console.log(row);
//    })
//});

//Prints out replies
//sql = 'SELECT * FROM replies';
//db.all(sql, [], (err, rows) => {
//    if (err) return console.error(err.message);
//    rows.forEach(row => {
//        console.log(row);
//    })
//});

//Prints out all unauthorised replies
//sql = 'SELECT * FROM replies WHERE reply_approval = ?';
//db.all(sql, [0], (err, rows) => {
//    if (err) return console.error(err.message);
//    rows.forEach(row => {
//        console.log(row);
//    })
//});


//
//
//                                                              STATEMENTS TO EDIT PRODUCT AND CATEGORY DATA.
//
//


//Inserts a category.
//sql = 'INSERT INTO categories(category_name,category_description,category_image,category_link) VALUES (?,?,?,?)';
//db.run(sql, ["Cutting", "Decorating Tools.", "imagelink", "categorylink"], (err) => {
//    if (err) return console.error(err.message);
//});

//Edits the category table. Change the variable after SET to the value to change, and in the brackets the values to change. The second value is the category ID to change.
//sql = 'UPDATE categories SET category_link = ? WHERE category_id = ?';
//db.run('UPDATE categories SET category_link = ? WHERE category_id = ?', ['/category-page?categoryID=5', 5], (err) => {
//    if (err) return console.error(err.message);
//});




//Inserts a product.
//sql = 'INSERT INTO products(product_name,product_description,category_id, product_price_daily, product_price_weekly, product_image, product_link) VALUES (?,?,?,?,?,?,?)';
//db.run(sql, ["Hedge Trimmer", "Hedge Trimmer Description.", 5, 20, 80, '/images/hedge-trimmer.jpg', 'hedge-trimmer-link'], (err) => {
//    if (err) return console.error(err.message);
//});

//Edits the product table. Change the variable after SET to the value to change, and in the brackets the values to change. The second value is the product ID to change.
//sql = 'UPDATE products SET product_price_weekly = ? WHERE product_id = ?';
//db.run('UPDATE products SET product_price_weekly = ? WHERE product_id = ?', [100, 1], (err) => {
//    if (err) return console.error(err.message);
//});



//
//
//                                                              STATEMENTS TO EDIT REVIEW AND REPLY APPROVAL.
//
//

//Change the values within the brackets to change the approval of the review. The first value is the approval (1 being positive), and the second the review ID.
//sql = 'UPDATE reviews SET review_approval = ? WHERE review_id = ?';
//db.run('UPDATE reviews SET review_approval = ? WHERE review_id = ?', [1, 5], (err) => {
//    if (err) return console.error(err.message);
//});

//Change the values within the brackets to change the approval of the product. The first value is the approval (1 being positive), and the second the product ID.
//db.run('UPDATE replies SET reply_approval = ? WHERE reply_id = ?', [1, 6], (err) => {
//    if (err) return console.error(err.message);
//});
































//
//
//                                                                          OLD CODE
//
//

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

//sql = 'UPDATE products SET product_price_weekly = ? WHERE product_id = ?';
//db.run('UPDATE products SET product_price_weekly = ? WHERE product_id = ?', [100, 1], (err) => {
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

//sql = 'CREATE TABLE reviews(review_id INTEGER PRIMARY KEY, product_id INTEGER, review_username TEXT, review_description TEXT, review_performance_rating INTEGER, review_customer_service_rating INTEGER, review_support_service_rating INTEGER, review_after_sale_support_service_rating INTEGER, review_date TEXT, review_approval BOOLEAN)';
//db.run(sql);

//db.run('drop table reviews');

//sql = 'INSERT INTO reviews(product_id, review_username, review_description, review_performance_rating, review_customer_service_rating, review_support_service_rating, review_after_sale_support_rating, review_date, review_approval) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)';
//sql = 'CREATE TABLE comments(comment_id INTEGER PRIMARY KEY, review_id INTEGER, comment_username TEXT, comment_description TEXT, comment_approval BOOLEAN)';
//db.run(sql);

//sql = 'UPDATE reviews SET review_approval = ? WHERE review_id = ?';
//db.run('UPDATE reviews SET review_approval = ? WHERE review_id = ?', [1, 5], (err) => {
//    if (err) return console.error(err.message);
//});

//sql = 'CREATE TABLE replies (reply_id INTEGER PRIMARY KEY,review_id INTEGER,reply_username TEXT,reply_description TEXT,reply_approval BOOLEAN)';
//db.run(sql);

//db.run('UPDATE replies SET reply_approval = ? WHERE reply_id = ?', [1, 6], (err) => {
//    if (err) return console.error(err.message);
//});




//db.run('DELETE FROM reviews');

//GatherMainRows();

