export const convert = (digits, inputBase, outputBase) => {
  // Validate bases
  if (inputBase <= 1) {
    throw new Error('Wrong input base');
  }

  if (outputBase <= 1) {
    throw new Error('Wrong output base');
  }

  // Validate input digits
  if (digits.length === 0) {
    throw new Error('Input has wrong format');
  }

  // Leading zero check
  if (digits.length > 1 && digits[0] === 0) {
    throw new Error('Input has wrong format');
  }

  for (let digit of digits) {
    if (digit < 0 || digit >= inputBase) {
      throw new Error('Input has wrong format');
    }
  }

  // Convert input base → decimal
  let decimal = 0;
  for (let digit of digits) {
    decimal = decimal * inputBase + digit;
  }

  // If number is zero
  if (decimal === 0) {
    return [0];
  }

  // Convert decimal → output base
  const result = [];
  while (decimal > 0) {
    result.unshift(decimal % outputBase);
    decimal = Math.floor(decimal / outputBase);
  }

  return result;
};