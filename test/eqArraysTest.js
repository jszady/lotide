const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("eqArrays()", () => {
  it("shold return true for [1,2,3] and [1,2,3]", () => {
    assert.isTrue(eqArrays([1,2,3], [1,2,3]));
  });
  it("should return true for [] and []", () => {
    assert.isTrue(eqArrays([],[]));
  });
  it("should return false for [1,2,3] and [1,3,2]", () => {
    assert.isFalse(eqArrays([1,2,3],[1,3,2]));
  })

})