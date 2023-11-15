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

console.log(without([1,2,3], [2]));
console.log(without([1], [1]));
console.log(without([],[]));
console.log(without([1,2,3], [1,2, "3"]));
console.log(without([1,2,3],[1,2]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2,3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]

