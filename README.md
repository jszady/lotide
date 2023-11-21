# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jszady/lotide`

**Require it:**

`const _ = require('@jszady/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `asseertArrayEqual(arr1,arr2)`: shows us if 2 arrays are equal to eachother
* `assertEqualTest(actaul, expected)`: shows us if variables are equal
* `countOnly(array, whatToCountInArray)`: returns and object of how many times an object was counted ex:
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
console.log(countOnly(firstNames,{Jason: true, Fang: true}))
will return{Jason: 1, Fang: 2}
* `eqArrays(arr1,arr2)` : returns true if arrays are exactly the same items must be in same index
* `findKeyByValue(object, value)` : will retunrn the key of the value if value doesnt exist return undefined 
* `flattenTest(arr)` : will turn nested arrays into 1 array recursively;
* `head(arr)` : will return the first item in the array
* `letterPosition(str)` : will return an object with each letter in str and the key and the value will be the index that the values sits at,
* `middle()` : will return the middle item of array if array len is odd if array len is even it will return the middle 2 items and if the array len is <= 2 it will return an empty array return will be an array 
* `tail(arr)`: if array len is 1 or less it will return an empty array else it will return the array without the first element;

