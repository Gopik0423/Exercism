// @ts-check

export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${age >= 50 ? 'mature' : 'young'} fellow you are.`;
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!
Class of ${year}`;
}

export function costOf(sign, currency) {
  const basePrice = 20;
  const costPerChar = 2;

  const totalCost = basePrice + (sign.length * costPerChar);

  return `Your sign costs ${totalCost.toFixed(2)} ${currency}.`;
}
