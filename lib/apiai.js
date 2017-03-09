var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

function helloRoute() {
  var apiai = new express.Router();
 // apiai.use(cors());
 // apiai.use(bodyParser());


  // GET REST endpoint - query params may or may not be populated
  apiai.get('/', function(req, res) {
    console.log(new Date(), 'In hello route GET / req.query=', req.query);
    var world = req.query && req.query.hello ? req.query.hello : 'World';

    // see http://expressjs.com/4x/api.html#res.json
    res.json({msg: 'Hello ' + world});
  });



  return apiai;
}

module.exports = helloRoute;
