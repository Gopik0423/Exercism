export const isArmstrongNumber = (value) => {
  const str = value.toString();
  const power = BigInt(str.length);

  let sum = 0n;

  for (let digit of str) {
    sum += BigInt(digit) ** power;
  }

  return sum === BigInt(value);
};