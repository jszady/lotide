const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string)
{
  const result = {};

  for (const letter of string)
  {
    if(!result[letter])
    {
      result[letter] = 1;
    }
    else 
    {
      result[letter] += 1;
    }

  }
  return result;
};

console.log(countLetters("LHL"))
console.log(countLetters(""))
console.log(countLetters("hello"))
const result = countLetters('LHL');
assertEqual(result['L'], 2);
assertEqual(result['H'], 1);

