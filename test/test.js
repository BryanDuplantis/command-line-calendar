var path = require('path');
var should = require('chai').should();
var Month = require(path.join(process.cwd(), '/lib/month'));

// process.cwd()
// Returns the current working directory of the process.

// this test is testing the test; whoa

  describe('Tests', function() {
    it('truthyness', function() {
      true.should.equal(true);
  });
});

// testing the 'month' object

describe('month', function() {
    it('should give the current month', function() {
      var month = new Month();
      month.should.be.current;
  });
});


