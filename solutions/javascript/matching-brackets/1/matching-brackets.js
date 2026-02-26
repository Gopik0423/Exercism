export const isPaired = (input) => {
  const stack = [];
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of input) {
    // If opening bracket → push to stack
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    }
    // If closing bracket → check match
    else if (char === ')' || char === '}' || char === ']') {
      if (stack.pop() !== brackets[char]) {
        return false;
      }
    }
  }

  // If stack is empty → balanced
  return stack.length === 0;
};