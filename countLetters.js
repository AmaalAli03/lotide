const string = "My name is Amaal Ali";

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==   ${expected}`);
  }
};
const countLetters = function(string) {
  const result = {};
  const removeSpace = string.split(" ").join("");
  const lowerCaseString = removeSpace.toLowerCase();
  for (const letter of lowerCaseString){
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter]++;
  }
return result
  }
  console.log(countLetters(string));