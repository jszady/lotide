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

