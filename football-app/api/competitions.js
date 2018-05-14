var express = require('express');
var router = express.Router();
var footballApiUrl = require('../utils/config').FOOTBALL_API_URL;
var path = require('path');
var urljoin = require('url-join');
var makeRequest = require('../utils/makeRequest');

router.get('/', function(req, res, next) {

  var requestUrl = urljoin(footballApiUrl, req.originalUrl);
  
  makeRequest(requestUrl)
    .then(response => res.json(response))
    .catch(err => res.status(404));
});

router.get('/:id/teams', function(req, res, next) {
  var requestUrl = urljoin(footballApiUrl, req.originalUrl);

  makeRequest(requestUrl)
    .then(response => res.json(response))
    .catch(err => res.status(404));
});

router.get('/:id/table', function(req, res, next) {
  var requestUrl = urljoin(footballApiUrl, `/competitions/${req.params.id}/leagueTable`);

  makeRequest(requestUrl)
    .then(response => res.json(response))
    .catch(err => res.status(404));
});

router.get('/:id/fixtures', function(req, res, next) {
  var requestUrl = urljoin(footballApiUrl, req.originalUrl);

  makeRequest(requestUrl)
    .then(response => res.json(response))
    .catch(err => res.status(404));
});

module.exports = router; 