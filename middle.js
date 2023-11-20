const eqArrays = require("./eqArrays");

const assertArraysEqual = require('./assertArraysEqual');

const middle = function (arr) {
  if (arr.length <= 2) {
    return [];
  }
  if(arr.length % 2 === 0)
  {
    return [arr[Math.floor((arr.length/2)  - 1)], arr[Math.floor(arr.length/2)]]
  }
  return [arr[Math.floor(arr.length/2)]];
};

console.log(eqArrays(middle([1,2,3]), [2]));
console.log(eqArrays(middle([]), []));
console.log(eqArrays(middle([1,2]), []));
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([]), []);

