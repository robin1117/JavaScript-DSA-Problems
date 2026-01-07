/*
-------------------------------------------------
📝 Problem:Signature Validation
-------------------------------------------------
Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:

Letters in the message and secret key have these values:
a to z have values 1 to 26 respectively.
A to Z have values 27 to 52 respectively.
All other characters have no value.
Compute the signature by taking the sum of the message plus the sum of the secret key.
For example, given the message "foo" and the secret key "bar", the signature would be 57:
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function asciiConversion(char) {
  if (char >= 'a' && char <= 'z') {
    return char.charCodeAt(0) - 96;   // a = 1
  }
  if (char >= 'A' && char <= 'Z') {
    return char.charCodeAt(0) - 38;   // A = 27
  }
  return 0;
}

function verify(message, key, signature) {
  let messageSum = (message.match(/\w/g) || [])
    .map(asciiConversion)
    .reduce((a, b) => a + b, 0);

  let keySum = (key.match(/\w/g) || [])
    .map(asciiConversion)
    .reduce((a, b) => a + b, 0);

  return messageSum + keySum === signature;
}

console.log(verify("freeCodeCamp", "Rocks", 238)); // true
