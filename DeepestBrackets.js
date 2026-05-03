/*
-------------------------------------------------
📝 Problem:Deepest Brackets
-------------------------------------------------
Given a string containing balanced brackets, return the content of the deepest nested brackets.

Brackets can be any of the three types: (), [], and {}.
The input will always have a single deepest group.
For example, given "(hello (world))", return "world".


-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function getDeepestBrackets(str) {
  const stack = [];
  let maxDepth = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if ("([{".includes(ch)) {
      stack.push({ index: i, char: ch });

      // Update max depth
      if (stack.length > maxDepth) {
        maxDepth = stack.length;
      }

    } else if (")]}".includes(ch)) {
      const last = stack.pop();

      // If this closing matches the deepest level
      if (stack.length + 1 === maxDepth) {
        result = str.slice(last.index + 1, i);
      }
    }
  }

  return result;
}

// Waiting:1. getDeepestBrackets("(hello (world))") should return "world".