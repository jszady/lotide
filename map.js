const eqArrays = function(arr1, arr2)
{
  if(arr1.length !== arr2.length)
  {
    return false;
  }
  if(arr1.length === 0 && arr2.length == 0)
  {
    return true;
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
console.log(results1);

assertArraysEqual(map(words,results1), ['g','c','t','m','t'])