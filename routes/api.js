var express = require('express');
var router = express.Router();
var db = require('../database')

router.get('/', function(req, res, next) {
  res.send('respond with a structure regarding the api');
});

router.get('/foods', function(req, res, next) {
  var results = [];
   if(!req.query.search) {
     db.Foods.findAll( function(documents) {
       res.send(documents);
     });
   }
   else {
     db.Foods.find(req.query.search, function(documents) {
       res.send(documents);
     });
   }
});

router.get('/foods/:id', function(req, res, next) {
    db.Foods.findById(parseInt(req.params.id), function(documents){
    if(documents != null) {
      res.send(documents);
    }
    else {
      //send and error
    }
  });
});

module.exports = router;
