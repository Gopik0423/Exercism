export const keep = (array, predicate) => {
  if (!Array.isArray(array)) throw new Error('First argument must be an array');
  if (typeof predicate !== 'function') throw new Error('Second argument must be a function');

  return array.filter(predicate);
};

export const discard = (array, predicate) => {
  if (!Array.isArray(array)) throw new Error('First argument must be an array');
  if (typeof predicate !== 'function') throw new Error('Second argument must be a function');

  return array.filter(element => !predicate(element));
};
