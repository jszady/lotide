const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require("./eqArrays");

const flatten = function (arr)
{
  let newArr = [];

  for (let i = 0; i < arr.length; i++)
  {
    if(Array.isArray(arr[i]))
    {
      newArr = newArr.concat(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

flatten([1,2,3,[4,5],6]);
