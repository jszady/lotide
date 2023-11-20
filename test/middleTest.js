const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


// assertArraysEqual(middle([1,2,3]), [2]);
// assertArraysEqual(middle([1,2,3]), []);
// assertArraysEqual(middle([1,2]), []);
// assertArraysEqual(middle([]), []);

describe("middle()", () => {
  it("should retrun [2] from [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });
  it("should retrun [2,3] from [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });
  it("should retrun [] from [1,2]", () => {
    assert.deepEqual(middle([1,2]),[]);
  });
  it("should retrun [] from []", () => {
    assert.deepEqual(middle([]),[]);
  });
  

})