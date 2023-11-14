const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let tailArr = [];

  for (let i = 1; i < arr.length; i++) {
    tailArr[i - 1] = arr[i];

  }
  return tailArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(tail([]));
console.log(tail(["hello"]));
console.log(words.length);
assertEqual(tail(words).length, words.length - 1);
assertEqual(words.length, 3);