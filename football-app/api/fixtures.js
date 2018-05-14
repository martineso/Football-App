var express = require('express');
var router = express.Router();
var footballApiUrl = require('../utils/config').FOOTBALL_API_URL;
var path = require('path');
var urljoin = require('url-join');
var makeRequest = require('../utils/makeRequest');

router.get('/:id', function(req, res, next) {
    var requestUrl = urljoin(footballApiUrl, `/fixtures/${req.params.id}`);
  
    makeRequest(requestUrl)
      .then(response => res.json(response))
      .catch(err => res.status(404));
});

module.exports = router;

