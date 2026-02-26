export const convert = (input) => {
  const rows = input.split('\n');

  // Step 1: Validate row count (must be multiple of 4)
  if (rows.length % 4 !== 0) {
    throw new Error('Invalid input size');
  }

  const DIGITS = {
    " _ | ||_|   ": "0",
    "     |  |   ": "1",
    " _  _||_    ": "2",
    " _  _| _|   ": "3",
    "   |_|  |   ": "4",
    " _ |_  _|   ": "5",
    " _ |_ |_|   ": "6",
    " _   |  |   ": "7",
    " _ |_||_|   ": "8",
    " _ |_| _|   ": "9"
  };

  const results = [];

  // Process each 4-line block
  for (let i = 0; i < rows.length; i += 4) {
    const block = rows.slice(i, i + 4);

    // Validate column size (must be multiple of 3)
    if (block.some(row => row.length % 3 !== 0)) {
      throw new Error('Invalid input size');
    }

    const digitsPerLine = block[0].length / 3;
    let output = '';

    for (let col = 0; col < digitsPerLine; col++) {
      let pattern = '';

      for (let row = 0; row < 4; row++) {
        pattern += block[row].slice(col * 3, col * 3 + 3);
      }

      output += DIGITS[pattern] || '?';
    }

    results.push(output);
  }

  return results.join(',');
};