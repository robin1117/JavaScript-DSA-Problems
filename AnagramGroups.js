/*
-------------------------------------------------
📝 Problem:Anagram Groups
-------------------------------------------------
Given an array of words, return a 2d array of the words grouped into anagrams.

Words are anagrams if they contain the same letters in any order.
Each word belongs to exactly one group.
Return order doesn't matter.
For example, given ["listen", "silent", "hello", "enlist", "world"], return [["listen", "silent", "enlist"], ["hello"], ["world"]].


-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function groupAnagrams(words) {
    const map = {};

    for (let word of words) {

        let sorted = word.split('').sort().join('');

        console.log(map)
        console.log(sorted)
        console.log(map[sorted])

        if (!map[sorted]) {
            map[sorted] = [];
        }

        map[sorted].push(word);
    }

    return Object.values(map);
}

console.log(groupAnagrams(["listen", "silent", "hello", "enlist", "world"]));