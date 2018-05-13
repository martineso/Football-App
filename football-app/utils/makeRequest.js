var request = require('request-promise');
var API_KEY = require('../utils/constants').API_KEY;

function makeRequest (uri, headers = {}) {
    
    var _headers = Object.assign({}, headers, {
        'X-Auth-Token': API_KEY,
    });

    var options = {
        uri,
        headers: _headers,
        json: true
        // resolveWithFullResponse: true
    }

    return request(options);
}

module.exports = makeRequest;