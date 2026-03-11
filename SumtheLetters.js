/*
-------------------------------------------------
📝 Problem:Sum the Letters
-------------------------------------------------
Given a string, return the sum of its letters.

Letters are A-Z in uppercase or lowercase
Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
Uppercase and lowercase letters have the same value.
Ignore all non-letter characters.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function sumLetters(str) {
  let arr = str.toUpperCase().match(/[A-Z]/g);

  if (!arr) return 0;

  return arr
    .map(ch => ch.charCodeAt(0) - 64)
    .reduce((sum, n) => sum + n, 0);
}