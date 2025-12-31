/*
-------------------------------------------------
📝 Problem: String Mirror
-------------------------------------------------
Given two strings, determine if the second string is a mirror of the first.

A string is considered a mirror if it contains the same letters in reverse order.
Treat uppercase and lowercase letters as distinct.
Ignore all non-alphabetical characters.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function isMirror(str1, str2) {
  let s1 = str1.match(/([a-zA-Z0-9])/g).join('')
  let s2 = str2.match(/([a-zA-Z0-9])/g).reverse().join('')
  return s1 == s2;
}

isMirror("Hello World", "!dlroW !olleH")
