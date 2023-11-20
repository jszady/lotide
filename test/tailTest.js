const tail = require('../tail');

const assert = require('chai').assert;
// const words = ["Yo Yo", "Lighthouse", "Labs"];

// assertEqual(tail(words).length, words.length - 1);
// assertArraysEqual(tail([]),[]);
describe("tail()", () => {
  it("return [] if only 1 element ['hello']",() => {
    assert.deepEqual(tail(['hello']), []);
  });
  it("return [] if no element []",() => {
    assert.deepEqual(tail([]), []);
  });
  it("return ['am', 'john'] everything but the first element ['hello','am', 'john'],", () => {
    assert.deepEqual(tail(['hello','am','john']), ['am', 'john']);
  });
})