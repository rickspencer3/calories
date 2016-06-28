
var db = null;
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL configured in your docker-compose.yml file
var url = process.env.DATABASE_URL

MongoClient.connect(url, function(err, mongo_db) {
  assert.equal(null, err);
  db = mongo_db;
});

var findById = function(id_term){
  var cursor = db.collection("foods").find({id:id_term});

  cursor.toArray(function(err, documents) {
    if(documents != null ) {
      console.log("returning document from database.js");
      return documents;
    }
    else {
      return null;
    }
  });
}


module.exports.findById = findById;
