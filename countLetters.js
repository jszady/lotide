const assertEqual = require('./assertEqual');

const countLetters = function (string)
{
  const result = {};

  for (const letter of string)
  {
    if(letter !== " ")
    {
      if(!result[letter])
      {
        result[letter] = 1;
      }else {
        result[letter] += 1;
      }
    }
  }
  return result;
};
module.exports = countLetters;

// const result = countLetters('LHL');
// assertEqual(result['L'], 2);
// assertEqual(result['H'], 1);

