
const middle = function(middleArray) {
  //For arrays with one or two elements, there is no middle. Return an empty array.
  if (middleArray.length <= 2 ) {
    return [];
  }if(middleArray.length % 2 == 0){
//2 elements need to be returned
return [middleArray[middleArray.length / 2 - 1] , middleArray[middleArray.length / 2] ]
  }
  if (middleArray.length % 2 !== 0){
    const middleNumber =  Math.floor(middleArray.length / 2);
  return [middleArray[middleNumber]] 
    
  }
  
}
// console.log(middle([1, 2, 3, 4])) // => [2])
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
//arrays with odd number of elements, an array containing a single middle element should be returned.
//arrays with an even number of elements, an array containing
module.exports = middle;