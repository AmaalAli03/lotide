const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const without = function(array, itemsToRemove) {
 let result = [];

 // loop through array
 for(let arrayValue of array) {
  console.log("this is the array value being looped", arrayValue)
  console.log("results array before if statement", result)
    //if array value does not equal any of the items
    //then push that value to results array
    if(!itemsToRemove.includes(arrayValue)) {
      console.log("the arrayvalue does not equal to any of the values in itemsToRemove array")
      result.push(arrayValue);
    }
    console.log("results array after if statement", result)
 }
 return result;
}

// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
module.exports = without;