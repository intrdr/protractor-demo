// Tests for the calculator.
exports.config = {
  directConnect: false,
  framework: 'jasmine2',

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'phantomjs',
	'phantomjs.cli.args': ['--loglevel=DEBUG']  
  },
};
