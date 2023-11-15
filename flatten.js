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
  let nonNestedArray = [];
  let nestedArray = [];

  for (let i = 0; i < arr.length; i++)
  {
    //console.log(typeof(arr[i]));
    if(typeof(arr[i]) === "number")
    {
      nonNestedArray.push(arr[i]);
    } 
    if(typeof(arr[i]) === "object")
    {
      nestedArray = nestedArray.concat(arr[i]);
    }
  }
  const combinedArray = nonNestedArray.concat(nestedArray).sort((a,b) => a-b);
  console.log(combinedArray);
};

flatten([1,2,3,[4,5],6]);
