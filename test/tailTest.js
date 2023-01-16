const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');
const assertEqual = require('../assertEqual');

const test1 = tail([1, 2, 3]);
assertArraysEqual(test1, [2, 3]);
console.log(test1);

const test2 = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(test2, ["Lighthouse", "Labs"]);
console.log(test2);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
//another way to write^^
// assertArraysEqual(tail(["Yo Yo", "Lighthouse", "Labs"], ["Lighthouse", "Labs"])) 
const actual = tail([1, 2, 3]);
const expected = [2, 3];
assertArraysEqual(actual, expected);