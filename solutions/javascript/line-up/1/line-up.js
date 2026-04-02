// line-up.js
export function format(name, number) {
  let suffix = 'th';
  const lastTwo = number % 100;
  const lastDigit = number % 10;

  if (lastTwo < 11 || lastTwo > 13) {
    if (lastDigit === 1) suffix = 'st';
    else if (lastDigit === 2) suffix = 'nd';
    else if (lastDigit === 3) suffix = 'rd';
  }

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
}