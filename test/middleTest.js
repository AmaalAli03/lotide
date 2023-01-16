const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]) // => [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]) // => [3]