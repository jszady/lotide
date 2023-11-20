const eqArrays = require("./eqArrays");

const assertArraysEqual = require('./assertArraysEqual');

const without = function (source, itemsToRemove)
{

  let result = [];

  for(let i = 0; i < source.length; i++)
  {
    let shouldAdd = true;
    for (let j = 0; j < itemsToRemove.length; j++)
    {
      if(source[i] === itemsToRemove[j]){
        shouldAdd = false;
        break;
      }
    }
    if(shouldAdd)
    {
      result.push(source[i]);
    }
  }
  return result;
  
  // easy way 
  // return source.filter((item) => !itemsToRemove.includes(item));
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2,3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]

