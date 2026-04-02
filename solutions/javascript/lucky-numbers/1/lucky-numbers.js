//
// Kojo's Fun With Numbers
//

// Task 1: twoSum
export function twoSum(array1, array2) {
  const num1 = Number(array1.join(''));
  const num2 = Number(array2.join(''));
  return num1 + num2;
}


// Task 2: luckyNumber (Palindrome check)
export function luckyNumber(value) {
  const str = String(value);
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}


// Task 3: errorMessage
export function errorMessage(input) {
  // Check if input is empty / null / undefined
  if (!input) {
    return 'Required field';
  }

  const num = Number(input);

  // Check if not a number or equals 0
  if (num === 0 || Number.isNaN(num)) {
    return 'Must be a number besides 0';
  }

  return '';
}

