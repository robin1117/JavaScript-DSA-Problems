/*
-------------------------------------------------
📝 Problem:Flattened
-------------------------------------------------
Given an array, determine if it is flat.
An array is flat if none of its elements are arrays.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function isFlat(arr) {
  let a = arr.filter((ele) => Array.isArray(ele))
  return a.length == 0
}

console.log(isFlat([1, [2, [3]]])) //false


function isFlat(arr) {
  return !arr.some(ele => Array.isArray(ele));
}

console.log(isFlat([1,2,3]));       // true
console.log(isFlat([1,2,[3,4]]));   // false