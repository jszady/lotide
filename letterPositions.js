const eqArrays = require("./eqArrays");

const assertArraysEqual = require('./assertArraysEqual');

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
