const { MongoClient } = require("mongodb");

var MongoClientNew = require('mongodb').MongoClient;

const mongoose = require('mongoose');

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

var url;
async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
     const uri = "mongodb+srv://rajithrahul:Ironman24@cluster0.rzq0zbs.mongodb.net/Memento?retryWrites=true&w=majority";
     url = uri

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main()

MongoClientNew.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Memento");
    dbo.collection("usersList").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
  });

  
addUsers = () => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Memento");
        var myobj = { userName: "Rajith", password: "Rajith24" };
        dbo.collection("usersList").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
}
  