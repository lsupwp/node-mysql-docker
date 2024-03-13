const express = require('express');
const cors = require('cors');
const mysql = require('./src/db/mysql');

const app = express();
const port = 3000;

app.use(cors());

app.get('/users', (req, res) => {
  mysql.query('SELECT * FROM users', (error, results) => {
    if (error) {
      res.status(500).send(error);
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
