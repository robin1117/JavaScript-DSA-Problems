/*
-------------------------------------------------
📝 Problem:2nd Largest
-------------------------------------------------
Given an array, return the second largest distinct number.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function secondLargest(arr) {
    const uniqueArray = [...new Set(arr)];
    uniqueArray.sort((a, b) => a - b)

    if (uniqueArray.length > 1) {
        return uniqueArray[uniqueArray.length - 2]
    }
    return 'it`s Single Array'

}

secondLargest([10])