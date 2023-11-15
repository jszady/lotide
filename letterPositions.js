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

const letterPositions = function(sentence) {
  const results = {};
  
    for(const index in sentence)
    {
      const letter = sentence[index];

      if(letter !== " ")
      {
        if(results[letter])
        {
          //first time we see the letter
          results[letter].push(Number(index));
        }else{
          //second time we see the letter
          results[letter] = [Number(index)];
        }
        
      }
    }

  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
