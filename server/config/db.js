var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
<<<<<<< HEAD
    password: 'sa981227',
    database: 'project'
=======
    password: '1234',
    database: 'rhee'
>>>>>>> c5be818a99bcffe7763fb86a19a0f7b0290ceb0f
  });
  db.connect();
  module.exports = db;