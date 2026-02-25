export const squareRoot = (number) => {
  if (number < 1) {
    throw new Error("Input must be a positive whole number");
  }

  let left = 1;
  let right = number;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === number) {
      return mid;
    } else if (square < number) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  throw new Error("No integer square root found");
};