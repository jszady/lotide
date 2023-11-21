const findKeyByValue = require('../findKeyByValue');
const expect = require('chai').expect;

describe("findKeyByValue()", () => {
  it("should return undefined for the value 'Friends' in a given object", () => {
    const showsByGenre = {
        comedy: "Brooklyn Nine-Nine",
        drama: "The Wire",
        thriller: "Breaking Bad"
    };
    expect(findKeyByValue(showsByGenre, "Friends")).to.equal(undefined);
});

it("should return 'sci-fi' for the number 42 in a given object", () => {
  const genreByNumber = {
      comedy: 30,
      drama: 50,
      "sci-fi": 42
  };
  expect(findKeyByValue(genreByNumber, 42)).to.equal("sci-fi");
});

it("should return 'drama' for the value 'The Wire' in a given object", () => {
  const showsByGenre = {
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      thriller: "Breaking Bad"
  };
  expect(findKeyByValue(showsByGenre, "The Wire")).to.equal("drama");
});

})