// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

//Requiring dotenv package
require("dotenv").config();
// Requiring mysql package
const mysql = require("mysql");

// Setting up our connection information
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "thh2lzgakldp794r.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "vlo3yrznxjz7wi7x",
    password: process.env.DB_PASSWORD,
    database: "zmpy7su6hpt0lb1u",
  });
}

// Connecting to the database.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
