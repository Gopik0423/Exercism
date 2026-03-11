export const rows = (letter) => {
  const n = letter.charCodeAt(0) - 65; // distance from 'A'
  const size = 2 * n + 1;
  const result = [];

  for (let i = 0; i <= n; i++) {
    const char = String.fromCharCode(65 + i);
    const outerSpaces = n - i;
    const innerSpaces = i === 0 ? 0 : 2 * i - 1;

    let row;

    if (i === 0) {
      row = ' '.repeat(outerSpaces) + char + ' '.repeat(outerSpaces);
    } else {
      row =
        ' '.repeat(outerSpaces) +
        char +
        ' '.repeat(innerSpaces) +
        char +
        ' '.repeat(outerSpaces);
    }

    result.push(row);
  }

  // mirror the top half (excluding the middle row)
  for (let i = n - 1; i >= 0; i--) {
    result.push(result[i]);
  }

  return result;
};