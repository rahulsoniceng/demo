const express = require('express');
const rateLimit = require('express-rate-limit');
const { Client } = require('pg');
const app = express();
app.use(express.json());
//

const userRouteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const client = new Client({ /* db config */ });
client.connect();

// VULNERABLE ROUTE
app.post('/user', userRouteLimiter, (req, res) => {
  const userId = req.body.id;
  const query = 'SELECT * FROM users WHERE id = $1;';

  client.query(query, [userId], (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

app.listen(3000)
