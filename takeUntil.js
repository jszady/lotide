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
const takeUntil = function(array, callback) {
  const result = [];
  for(let i = 0; i < array.length; i++)
  {
    if(!callback(array[i]))
    {
      const value = array[i];
      result.push(value);
    }else{
      break;
    }
  }
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2]);
assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2,-1]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"])
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood", ","])