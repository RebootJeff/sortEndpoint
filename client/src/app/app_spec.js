describe('foo', function() {
  it('should bar', function() {
    expect('foo').toBe('bar'); // fail
  });
});

// ============================================================================
// Controller spec boilerplate:
// ============================================================================

xdescribe('controllerName', function() {

  // Get Angular module for Karma to test
  beforeEach(module('moduleName'));

  // Get reference to controller and mock out dependencies injection
  var exampleCtrl,
      mockDependency = {};

  beforeEach(inject(function($controller) {
    exampleCtrl = $controller('ExampleCtrl', {
      dependencyName: mockDependency
    });
  }));

  // Tests, nested describe blocks, nested tests
  it('should blah blah blah', function() {

  });

});

// ============================================================================
// Service spec boilerplate
// ============================================================================

xdescribe('serviceName', function() {

  // Get Angular module for Karma to test
  beforeEach(module('moduleName'));

  // Mock dependency injection
  var mockDependency = {};

  beforeEach(module(function($provide) {
    $provide.value('dependencyName', mockDependency);
  }));

  // Get references to services
  var Service,
      httpBackend;

  beforeEach(inject(function (_ServiceName_, $httpBackend, $q) {
    Service = _ServiceName_;
    httpBackend = $httpBackend;
  }));

  // Tests, nested describe blocks, nested tests
  it('should blah blah blah', function() {

  });

});
