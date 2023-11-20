const eqArrays = require("./eqArrays");

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const result = [];
  for(let i = 0; i < array.length; i++)
  {
    if(!callback(array[i]))
    {
      const value = array[i];
      result.push(value);
    }else{
      break;
    }
  }
  return result;
}
module.exports = takeUntil;
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2]);
assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2,-1]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"])
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood", ","])