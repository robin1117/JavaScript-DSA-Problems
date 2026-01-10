/*
-------------------------------------------------
📝 Problem: Sorted Array?
-------------------------------------------------
Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.

If the given array is:

In ascending order (lowest to highest), return "Ascending".
In descending order (highest to lowest), return "Descending".
Not sorted in ascending or descending order, return "Not sorted".
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function isSorted(arr) {

  let descending = arr.toSorted((a, b) => b - a)
  let ascending = arr.toSorted((a, b) => a - b)

  let isDescending = arr.every((value, index) => value == descending[index])

  let isAscending = arr.every((value, index) => value == ascending[index])

  if (isAscending) return "Ascending"
  if (isDescending) return "Descending"
  return "Not sorted"
}

console.log(isSorted([1, 2, 3, 4, 5]))