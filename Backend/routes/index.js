var express = require('express');
var router = express.Router();

var data = require('./../data/data.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  )
  res.send(data);
});

module.exports = router;
