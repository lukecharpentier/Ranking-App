const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://gibbs:Newman1@cluster1.mongodb.net/admin";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
 // perform actions on the collection object
  client.close();
});
