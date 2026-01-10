/*
-------------------------------------------------
📝 Problem:Circular Prime
-------------------------------------------------
Given an integer, determine if it is a circular prime.

A circular prime is an integer where all rotations of its digits are themselves prime.

For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function isCircularPrime(n) {
    if (!isPrime(n)) return false

    let rotation = n.toString().split('').map((num, ind, arr) => {
        let last = arr.pop()
        arr.unshift(last)
        return Number(arr.join(''))
    })

    return rotation.every((num) => isPrime(num))

}

isCircularPrime(197)