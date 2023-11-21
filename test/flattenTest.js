const flatten = require('../flatten');

const expect = require('chai').expect;
describe("flatten()", () => {
  it("return [1,2,3,4] from [1,2,[3],4]", () => {
    expect(flatten([1,2,[3],4])).to.eql([1,2,3,4]);
  });
  it("not return [1,2,[3],4] from [1,2,[3],4]", () => {
    expect(flatten([1,2,[3],4])).to.not.eql([1,2,[3],4]);
  });
  it("return [] from []", () => {
    expect(flatten([])).to.eql([]);
  })
  it("return [1] from [[[[[[1]]]]]]", () => {
    expect(flatten([[[[[1]]]]])).to.eql([1]);
  })
})