var express = require('express');
var router = express.Router();

// todo add routes to this page


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cache.io: A simple geocache logger' });
});

module.exports = router;
