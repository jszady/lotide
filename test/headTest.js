const assert = require('chai').assert;
const head = require('../head.js');
const assertEqual = require('../assertEqual.js');


// assertEqual(head([5,6,7]), 5);
// assertEqual(head([0]), 0)
// assertEqual(head([,6,7]), undefined);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
describe("head()", () => {
  it('this should return 5 from [5,6,7]', () => {
    assert.strictEqual(assertEqual(head([5,6,7]), 5));
  });
  it('return 0 for [0]', () => {
    assert.strictEqual(assertEqual(head([0]), 0));
  });
  it('return undefined for [,6,7]', () => {
    assertEqual(head([,6,7]), undefined);
  });
  it('this should return hello from ["Hello", "Lighthouse", "Labs"]', () => {
    assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
})
