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
  console.log(newArr);
};

flatten([1,2,3,[4,5],6]);
