var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sa981227',
    database: 'project'
  });
  db.connect();
  module.exports = db;