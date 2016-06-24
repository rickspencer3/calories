var express = require('express');
var router = express.Router();

http://192.168.99.100:3000/api/
router.get('/', function(req, res, next) {
  res.send('respond with a structure regarding the api');
});

http://192.168.99.100:3000/api/foods
router.get('/foods', function(req, res, next) {

  var results = [];
   if(!req.query.search) {
     var cursor = db.collection("foods").find();

     cursor.toArray(function(err, documents) {
       if(documents != null ) {
         res.send(documents);
      }
    });
   }
   else {
     var cursor = db.collection("foods").find({description:new RegExp(req.query.search, 'i')});

     cursor.toArray(function(err, documents) {
       if(documents != null ) {
         res.send(documents);
       }
     });

   }
});

//http://192.168.99.100:3000/api/foods/1234
router.get('/foods/:id', function(req, res, next) {
  console.log(req.params.id);
  var cursor = db.collection("foods").find({id:parseInt(req.params.id)});

  cursor.toArray(function(err, documents) {
    if(documents != null ) {
      res.send(documents);
    }
  });
});

module.exports = router;
