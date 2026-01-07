/*
-------------------------------------------------
📝 Problem:vOwElcAsE
-------------------------------------------------
Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.

Vowels are "a", "e", "i", "o", and "u" in any case.
Non-alphabetical characters should remain unchanged.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/
function toBinary(decimal) {
    let remainder = []
    while (decimal) {
        remainder.unshift(decimal % 2)
        decimal = parseInt(decimal / 2)
    }

    return remainder.join('');
}
// 5 / 2 = 2
// 2 / 2 = 1
// 1 / 2 = 0

toBinary(12)