const sqlite3 = require('sqlite3').verbose();
let sql;

const db = new sqlite3.Database("database.db", sqlite3.OPEN_READWRITE, (err) => { if (err) return console.error(err.message); });

var categoriesRows = [];

//db.run("DROP TABLE categories");

//sql = 'CREATE TABLE categories(category_id INTEGER PRIMARY KEY,category_name TEXT,category_description TEXT,category_image TEXT,category_link TEXT)';
//db.run(sql);



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


//sql = 'SELECT * FROM categories';
//db.all(sql, [], (err, rows) => {
//    if (err) return console.error(err.message);
//    rows.forEach(row => {
//        console.log(row);
//    })
//});


function GatherMainRows()
{
    db.all('SELECT * FROM categories', [], (err, rows) => {
        if (err) {
            console.error('Error executing query:', err.message);
        } else {
            // Process the retrieved rows
            rows.forEach(row => {
                console.log(1);
                categoriesRows.push(row);
            });
        }
        console.log(categoriesRows.length);
        //console.log("Info from row 3:");
        console.log(categoriesRows[2]);


        //module.export = categoriesRows;

        // Close the database connection
    });

}


GatherMainRows();
