const countOnly = require('../countOnly');
const expect = require("chai").expect;
describe("countOnly()", () => {
  it('return {Jason: 1, Fang: 2} from firstNames', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    expect(countOnly(firstNames, {Fang: true, Jason: true})).to.eql({Fang:2, Jason:1});
  });
})


// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);