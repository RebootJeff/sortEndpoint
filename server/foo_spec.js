describe('foo', function() {
  it('should foo', function() {
    expect('foo').toBe('foo');
  });

  it('should bar', function() {
    expect('foo').toBe('bar'); // fail
  });
});
