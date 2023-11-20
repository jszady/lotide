const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2)
{
  const result = eqArrays(arr1,arr2);
  if (result)
  {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;

assertArraysEqual([1,23,4], [1,23,4]);
assertArraysEqual([],[]);
assertArraysEqual([1,2,3], [1,2]);
assertArraysEqual([1,2,"2"], [1,2,2]);
