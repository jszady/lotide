const assertEqual = require('./assertEqual');
const findKeyByValue = function (object, value)
{
  for(const genre in object)
  {
    if(object[genre] === value)
    {
      return genre;
    }
  }
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);