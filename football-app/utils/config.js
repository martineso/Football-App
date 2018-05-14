var fs = require('fs'),
    path = require('path');

var envPath = path.resolve(__dirname, '../env.json');
var parsed = JSON.parse(fs.readFileSync(envPath, 'UTF-8'));

module.exports = parsed;