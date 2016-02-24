// Start server.
var express = require('express');
var app = express();
var util = require('util');

app.use(express.static(__dirname));
app.listen(3456);
console.log('Server running at http://localhost:3456');


// Tests for the calculator.
exports.config = {
  directConnect: true,
  framework: 'jasmine2',

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
};
