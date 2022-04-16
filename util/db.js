const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  database: "crud",
  user: "root",
  password: "25091994",
});

// db.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!!");
// });

module.exports = db;
