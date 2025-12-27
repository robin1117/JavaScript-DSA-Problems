/*
-------------------------------------------------
📝 Problem: Unique Character
-------------------------------------------------
Given a string, determine if all the characters in the string are unique.

Uppercase and lowercase letters should be considered different characters.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function allUnique(str) {
    let set = new Set(...[str])
    return str.length == set.size ? true : false;
}

