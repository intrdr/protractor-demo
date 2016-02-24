// Tests for the calculator.
exports.config = {
  directConnect: false,
  seleniumAddress: 'http://localhost:4444',
  framework: 'jasmine2',

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'phantomjs',
	'phantomjs.cli.args': ['--loglevel=DEBUG']
  },
};
