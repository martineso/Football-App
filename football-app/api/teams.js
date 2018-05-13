var express = require('express');
var router = express.Router();
var footballApiUrl = require('../utils/constants').FOOTBALL_API_URL;
var path = require('path');
var urljoin = require('url-join');
var makeRequest = require('../utils/makeRequest');

router.get('/:id', function(req, res, next) {
    var requestUrl = urljoin(footballApiUrl, `/teams/${req.params.id}`);
  
    makeRequest(requestUrl)
      .then(response => res.json(response))
      .catch(err => res.status(404));
});

// Fixtures for a certain team

router.get('/:id/fixtures', function(req, res, next) {
    var requestUrl = urljoin(footballApiUrl, `/teams/${req.params.id}/fixtures`);
  
    makeRequest(requestUrl)
      .then(response => res.json(response))
      .catch(err => res.status(404));
});

module.exports = router;

