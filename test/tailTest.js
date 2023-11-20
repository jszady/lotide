const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(tail(words).length, words.length - 1);
assertEqual(words.length, 3);
