


const eqArrays = function(firstArray, secondArray){

  if(firstArray.length !== secondArray.length){
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i] ) {
      return false;
    }
    
  }
  return true;
}

// const assertEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) { 
//     console.log(`✅✅✅Assertion passed ${actual} = ${expected}.`)
//   }else{
//     console.log(`🛑🛑🛑Assertion failed ${actual} = ${expected}.`)
//   }

// };

// TEST CODE
// console.log(assertEqual(eqArrays("Lighthouse Labs", "Bootcamp")));
// console.log(assertEqual(eqArrays([1, 1], [1, 1]), true));
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));// => should PASS
// console.log(eqArrays([1, 2, 3], [1, 2, 3]))// => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
module.exports = eqArrays;