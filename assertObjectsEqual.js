const eqArrays = require("./eqArrays");
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function (actual, expected)
{
  const inspect = require('util').inspect; 
  if(eqObjects(actual,expected))
  {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return;
    
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}

assertObjectsEqual({name: "jan", age:22}, {age: 22, name: "jan"});