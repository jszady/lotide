const eqArrays = require("./eqArrays");

const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, callback) => {
  const results = [];
  for(let item of arr)
  {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);


// assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t'])
// assertArraysEqual(map(words, word => word[1]), ['r','o','o','a','o'])
// assertArraysEqual(map(words, word => word[3]), [])
