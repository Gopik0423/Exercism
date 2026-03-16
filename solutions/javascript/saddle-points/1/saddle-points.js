export const saddlePoints = (matrix) => {
  const result = [];

  if (matrix.length === 0) return result;

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  for (let i = 0; i < numRows; i++) {
    const rowMax = Math.max(...matrix[i]);

    for (let j = 0; j < numCols; j++) {
      const value = matrix[i][j];

      if (value === rowMax) {
        let isMinInColumn = true;

        for (let k = 0; k < numRows; k++) {
          if (matrix[k][j] < value) {
            isMinInColumn = false;
            break;
          }
        }

        if (isMinInColumn) {
          result.push({ row: i + 1, column: j + 1 });
        }
      }
    }
  }

  return result;
};