/*
-------------------------------------------------
📝 Problem:Digits vs Letters
-------------------------------------------------
Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

Digits consist of 0-9.
Letters consist of a-z in upper or lower case.
Ignore any other characters.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function digitsOrLetters(str) {
    let leters = []
    let digits = []
    let matches = str.matchAll(/(?<char>[a-zA-Z])|(?<num>[0-9])/g)

    for (let { groups } of matches) {
        let { char, num } = groups
        char ? leters.push(char) : digits.push(num)
    }

    if (leters.length == digits.length) {
        return 'tie'
    }
    return leters.length > digits.length ? 'letters' : 'digits'

}

console.log(digitsOrLetters("P455W0RD"))
