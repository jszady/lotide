const letterPositions = require('../letterPositions');
const expect = require('chai').expect;

describe('letterPosition()', () => {
  it("return {h:[0], e:[1], l:[2,3] ,o:[4]}", () => {
    expect(letterPositions("hello")).to.eql({h:[0], e:[1], l:[2,3], o:[4]})
  });
  it("should return correct positions for each letter in 'Hello World'", () => {
    expect(letterPositions("Hello World")).to.eql({H:[0], e:[1], l:[2, 3, 9], o:[4, 7], W:[6], r:[8], d:[10]});
});
it("should return correct positions for each letter in 'ice cream'", () => {
  expect(letterPositions("ice cream")).to.eql({i:[0], c:[1, 4], e:[2, 6], r:[5], a:[7], m:[8]});
});
})