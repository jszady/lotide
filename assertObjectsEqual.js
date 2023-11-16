const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2)
{
  if(arr1.length !== arr2.length)
  {
    return false;
  }
  for(let i = 0; i < arr1.length; i++)
  {
    if(arr1[i] !== arr2[i])
    {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2)
{
  const objectOneKeys = Object.keys(object1);
  const objectTwoKeys = Object.keys(object2);
  
  if(objectOneKeys.length !== objectTwoKeys.length)
  {
    return false;
  }
  for (const key of objectTwoKeys)
  {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key]))
    {
      if(!eqArrays(object1[key], object2[key]))
      {
        return false;
      }
    }
    else if(object1[key] !== object2[key])
    {
      return false;
    }
  }
  return true;
};

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