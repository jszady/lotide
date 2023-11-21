
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

  const result = {};

  for (const item of allItems)
  {
    if(itemsToCount[item])
    {
      if(result[item])
      {
      result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
}

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
console.log(countOnly(firstNames,{Jason: true, Fang: true}))
module.exports = countOnly;
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
