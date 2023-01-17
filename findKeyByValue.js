const assertEqual = require('./assertEqual');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


function findKeyByValue(object, valueWeAreLookingFor) {// find the key inside the object where the value of that key matches the value that we're looking for
  let result = undefined; //set up a variable into which we're going to put an answer(bucket to store what we're going to return from the function)
  for (const key in object) {
    console.log('key', key);
    //key iterator is a variable. It will hold some informaion about each row in the object.
    // In fact,it holds the key.
    if (object[key] === valueWeAreLookingFor) {//object of the key
      //console.log("I found key = ", key);
      result = key;
    }
  }
  return result; 
}


//console.log(Object.keys(bestTVShowsByGenre))
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;