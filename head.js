const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if(arr[0] === '') {
    return undefined;
  }

  let firstElement = arr[0];
  return firstElement;

}

console.log(head([1,2,3,4]));
console.log(head([]));
console.log(head([12]));
console.log(head(['hello','how','are','you']));


assertEqual(head([5,6,7]), 5);
assertEqual(head([]), 0)
assertEqual(head([,6,7]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
