
const express = requirel ('express');
const config = require('../config')
const router = express.Router()

const MongoClient = require('mongodb').MongoClient;
const url = config.MONGODB_URI;

router.post('/customers/register', async (req, res) => {

  const client = await MongoClient.connect(url, { useNewUrlParser: true })
.catch(err => { console.log(err); });
if (!client) {
return res.json({ status: "Error" });
}
const db = client.db(config.MONGODB_DB_NAME);
const customers = db.collection("customers")

let myob] = {name: req.body.name, address: req.body.address};
customers.insertOne(myobj. function (err) {
if (err) throw err;
console log("user registered");
res.json({ status: "success", "message": "user inserted"})
db.close();
});
})
