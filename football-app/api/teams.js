var express = require('express');
var router = express.Router();
var footballApiUrl = require('../utils/config').FOOTBALL_API_URL;
var path = require('path');
var urljoin = require('url-join');
var makeRequest = require('../utils/makeRequest');
var format = require('../utils/formatResponse');

// Routes
router.get('/:id', function (req, res, next) {
    getTeamDetails(req)
      .then(response => res.json(response))
      .catch(err => res.status(400));
});

// Fixtures for a certain team
router.get('/:id/fixtures', function(req, res, next) {
    var requestUrl = urljoin(footballApiUrl, `/teams/${req.params.id}/fixtures`);
  
    makeRequest(requestUrl)
      .then(response => res.json(response))
      .catch(err => res.status(400));
});

// Get crest img
router.get('/:id/crestUrl', function(req, res, next) {
    getTeamDetails(req)
      .then(response => res.send(response.crestUrl))
      .catch(err => res.status(400));
});

// Functions
function getTeamDetails(req) {
    var requestUrl = urljoin(footballApiUrl, `/teams/${req.params.id}`);
    return makeRequest(requestUrl);
}

module.exports = router;

