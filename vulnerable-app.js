const express = require('express');
const { Client } = require('pg');
const app = express();
app.use(express.json());
//

const client = new Client({ /* db config */ });
client.connect();

// VULNERABLE ROUTE
app.post('/user', (req, res) => {
  const userId = req.body.id;
  const query = 'SELECT * FROM users WHERE id = $1;';

  client.query(query, [userId], (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

app.listen(3000)
