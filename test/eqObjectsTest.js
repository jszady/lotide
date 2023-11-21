const eqObjects = require('../eqObjects');
const expect = require('chai').expect;

describe("eqObject()", () => {
  it("should return true for two objects with identical keys and array values", () => {
    const object1 = { a: [1, 2, 3], b: "hello" };
    const object2 = { a: [1, 2, 3], b: "hello" };
    expect(eqObjects(object1, object2)).to.be.true;
  });

  it("should return false for two objects with different keys or values", () => {
    const object1 = { a: 1, b: "hello", c: true };
    const object2 = { a: 1, b: "world", d: true };
    expect(eqObjects(object1, object2)).to.be.false;
  });

  it("should return true for two equal objects with simple types", () => {
    const object1 = { a: 1, b: "hello", c: true };
    const object2 = { a: 1, b: "hello", c: true };
    expect(eqObjects(object1, object2)).to.be.true;
  });
  
})