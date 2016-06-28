
var db = null;
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL configured in your docker-compose.yml file
var url = process.env.DATABASE_URL

MongoClient.connect(url, function(err, mongo_db) {
  assert.equal(null, err);
  db = mongo_db;
});

var findFoodById = function(id_term, callback){
  var cursor = db.collection("foods").find({id:id_term});

  cursor.toArray(function(err, documents) {
      callback(documents);
  });
}

var findAllFoods = function(callback){
  var cursor = db.collection("foods").find();

  cursor.toArray(function(err, documents) {
      callback(documents);
  });
}

var findFoods = function(term, callback){
  var cursor = db.collection("foods").find({description:new RegExp(term, 'i')});

  cursor.toArray(function(err, documents) {
      callback(documents);
  });
}

var Foods = {
  findById:findFoodById,
  findAll:findAllFoods,
  find:findFoods
}

module.exports.Foods = Foods;
