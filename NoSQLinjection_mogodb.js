
const express = requirel express);
const config = require(./config)
const router = express.RouterQ
const MongoClient = requirel'mongodb').MongoClient;
const url = config.MONGODB_URI;
router.post(/customers/register, async (req, res) => (
const client = await MongoClient.connect(url, ( useNewUrlParser: true I)
catcherr => ( console.log(err): ):
if (!client) [
return res-json(i status: "Error" I):
}
const db = client.db(config.MONGODB_DB_NAME):
const customers = db.collection("customers")
let myob] = (name: reg.body.name, address: reg.body.address:
customers.insertOne(myobj. function (err) i
if (err) throw err;
console log("user registered"):
res.json(i status: "success", "message": "user inserted" 1) db.close();
});
})
