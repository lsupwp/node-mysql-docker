const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'db',
  user: 'user',
  password: 'password',
  database: 'my_database'
});

module.exports = connection;
