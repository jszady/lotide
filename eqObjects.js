const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2)
{
  const objectOneKeyslength = Object.keys(object1).length;
  const objectTwoKeysLength = Object.keys(object2).length;
  
  if(objectOneKeyslength !== objectTwoKeysLength)
  {
    return false;
  }
  for (const value in object2)
  {
    if(!object1.hasOwnProperty(value) && !object1.hasOwnProperty(object2[value]))
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

