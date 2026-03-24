export const annotate = (input) => {
  if (input.length === 0) return [];

  const rows = input.length;
  const cols = input[0].length;

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],          [0, 1],
    [1, -1],  [1, 0], [1, 1]
  ];

  const result = [];

  for (let i = 0; i < rows; i++) {
    let newRow = "";

    for (let j = 0; j < cols; j++) {
      if (input[i][j] === "*") {
        newRow += "*";
      } else {
        let count = 0;

        for (const [dx, dy] of directions) {
          const x = i + dx;
          const y = j + dy;

          if (
            x >= 0 && x < rows &&
            y >= 0 && y < cols &&
            input[x][y] === "*"
          ) {
            count++;
          }
        }

        newRow += count === 0 ? " " : count;
      }
    }

    result.push(newRow);
  }

  return result;
};