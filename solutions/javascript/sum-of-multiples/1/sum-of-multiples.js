export const sum = (multiples, limit) => {
  const uniqueMultiples = new Set();

  for (let i = 1; i < limit; i++) {
    for (let factor of multiples) {
      if (factor !== 0 && i % factor === 0) {
        uniqueMultiples.add(i);
      }
    }
  }

  let total = 0;
  for (let num of uniqueMultiples) {
    total += num;
  }

  return total;
};