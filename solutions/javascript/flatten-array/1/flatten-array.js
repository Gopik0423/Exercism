export const flatten = (array) => {
  const result = [];

  const helper = (arr) => {
    for (const item of arr) {
      if (Array.isArray(item)) {
        helper(item); // recurse for nested arrays
      } else if (item !== null && item !== undefined) {
        result.push(item); // add valid value
      }
    }
  };

  helper(array);
  return result;
};