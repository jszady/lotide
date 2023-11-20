const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(tail(words).length, words.length - 1);
assertEqual(words.length, 3);
assertArraysEqual(tail(['hello']), []);
assertArraysEqual(tail([]),[]);
