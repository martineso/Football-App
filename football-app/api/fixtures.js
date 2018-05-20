var express = require('express');
var router = express.Router();
var footballApiUrl = require('../utils/config').FOOTBALL_API_URL;
var path = require('path');
var urljoin = require('url-join');
var makeRequest = require('../utils/makeRequest');
var format = require('../utils/formatResponse');

router.get('/', function(req, res, next) {
  var requestUrl = urljoin(footballApiUrl, req.originalUrl);

  makeRequest(requestUrl)
    .then(response => {
      let formatted = format.formatFixturesResponse(response);
      return res.json(formatted);
    })
    .catch(err => res.status(400));
});

router.get('/:id', function(req, res, next) {
    var requestUrl = urljoin(footballApiUrl, `/fixtures/${req.params.id}`);
  
    makeRequest(requestUrl)
      .then(response => res.json(response))
      .catch(err => res.status(400));
});

module.exports = router;

