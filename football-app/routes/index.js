var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.type('text/html');
  res.sendFile('views/index.html', {root: './public/'})
});

module.exports = router;
