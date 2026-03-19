export const encode = (text, rails) => {
  if (rails <= 1) return text;

  const fence = Array.from({ length: rails }, () => []);
  let rail = 0;
  let direction = 1; // 1 = down, -1 = up

  for (const char of text) {
    fence[rail].push(char);

    rail += direction;

    if (rail === 0 || rail === rails - 1) direction *= -1;
  }

  return fence.flat().join('');
};

export const decode = (cipher, rails) => {
  if (rails <= 1) return cipher;

  const len = cipher.length;
  const fence = Array.from({ length: rails }, () => Array(len).fill(null));

  // Mark positions
  let rail = 0;
  let direction = 1;
  for (let i = 0; i < len; i++) {
    fence[rail][i] = '*';
    rail += direction;
    if (rail === 0 || rail === rails - 1) direction *= -1;
  }

  // Fill letters
  let index = 0;
  for (let r = 0; r < rails; r++) {
    for (let c = 0; c < len; c++) {
      if (fence[r][c] === '*' && index < len) {
        fence[r][c] = cipher[index++];
      }
    }
  }

  // Read zig-zag
  let result = '';
  rail = 0;
  direction = 1;
  for (let i = 0; i < len; i++) {
    result += fence[rail][i];
    rail += direction;
    if (rail === 0 || rail === rails - 1) direction *= -1;
  }

  return result;
};