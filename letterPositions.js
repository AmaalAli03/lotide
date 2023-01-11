
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
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==   ${expected}`);
  }
};

const string = "hello"
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    const letter = sentence[i];
    //console.log(!results[letter])
  if (!results[letter]) {
    console.log(letter + " doesnt exist in ", {results})
    results[letter] = [i]
   //if the letter doesnt exist we need to make it exist then add count 1 
   console.log(letter + " added to results ", {results})
    //if the letter exists add 1
    // if it exists there will be none with 0 count
    
  }else{
    console.log(letter + " DOES exist in ", {results})
    results[letter].push(i) 
    console.log(i  + "  added to ", results[letter])
  }

  }
  // logic to update results here
  return results;
};
console.log(assertArraysEqual(letterPositions("hello").e, [1]));