const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

const tail = function(arr) {
  let tailArr = [];

  if(arr.length <= 1)
  {
    return [];
  }

  for (let i = 1; i < arr.length; i++) {
    tailArr[i - 1] = arr[i];

  }
  return tailArr;
};
module.exports = tail;