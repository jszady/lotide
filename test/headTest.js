const head = require('../head.js');
const assertEqual = require('../assertEqual.js');


assertEqual(head([5,6,7]), 5);
assertEqual(head([0]), 0)
assertEqual(head([,6,7]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");