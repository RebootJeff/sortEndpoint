// 3rd party dependencies
// var _ = require('lodash');

// Internal dependencies
var foo = require('../server.js');

describe('foo', function() {
  it('should foo', function() {
    expect('foo').toBe('foo');
  });

  it('should bar', function() {
    expect('foo').toBe('bar'); // fail
  });
});
