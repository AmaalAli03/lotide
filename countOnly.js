const assertEqual = require('./assertEqual');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {}
  for (const item of allItems) {
    // item is the names individually
    if (itemsToCount[item]) {
      //itemsToCount is the object and all
      //Items is the array item is a string(element of the array)
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
// const obj = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }

// const result1 = countOnly(firstNames, obj);

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
module.exports =countOnly;
