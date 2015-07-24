var path = require('path');
var should = require('chai').should();
var Month = require(path.join(process.cwd(), '/lib/month'));

describe('Month', function () {
  it('should be a number between 3 and 14', function () {
    var month = new Month;

    month.should.be.an.instanceOf(Month);
    month.should.be.an('object');
  });
});
