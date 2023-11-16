const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

const eqObjects = function (object1, object2)
{
  const objectOneKeys = Object.keys(object1);
  const objectTwoKeys = Object.keys(object2);
  
  if(objectOneKeys.length !== objectTwoKeys.length)
  {
    return false;
  }
  for (const key of objectTwoKeys)
  {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key]))
    {
      if(!eqArrays(object1[key], object2[key]))
      {
        return false;
      }
    }
    else if(object1[key] !== object2[key])
    {
      return false;
    }
  }
  return true;
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
