export const primes = (n) => {
  if (n < 2) return [];

  // Create an array of boolean flags for numbers 0..n
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Collect all primes
  const primesList = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) primesList.push(i);
  }

  return primesList;
};