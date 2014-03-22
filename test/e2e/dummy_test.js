describe('Authentication capabilities', function() {
  var fail = function() { expect(true).toBe(true); }

  it('should redirect to the login page if trying to load protected page while not authenticated', fail);
  it('should warn on missing/malformed credentials', fail);
  it('should accept a valid email address and password', fail);
  it('should return to the login page after logout', fail);
});