export const isValid = (isbn) => {
  // Remove dashes
  const clean = isbn.replace(/-/g, '');

  // Must be exactly 10 characters
  if (clean.length !== 10) return false;

  let sum = 0;

  for (let i = 0; i < 10; i++) {
    let value;

    // Handle X only in last position
    if (clean[i] === 'X') {
      if (i !== 9) return false;
      value = 10;
    } else if (!/[0-9]/.test(clean[i])) {
      return false;
    } else {
      value = Number(clean[i]);
    }

    sum += value * (10 - i);
  }

  return sum % 11 === 0;
};