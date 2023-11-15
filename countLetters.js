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

