'use strict';

describe('Service: Host', function () {

  // load the service's module
  beforeEach(module('brazeHqTriviaApp'));

  // instantiate service
  var Host;
  beforeEach(inject(function (_Host_) {
    Host = _Host_;
  }));

  it('should do something', function () {
    expect(!!Host).toBe(true);
  });

});
