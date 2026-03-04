export const translate = (text) => {
  return text
    .split(' ')
    .map(word => translateWord(word))
    .join(' ');
};

const translateWord = (word) => {
  // Rule 1: starts with vowel, xr, or yt
  if (/^(xr|yt|[aeiou])/.test(word)) {
    return word + 'ay';
  }

  // Rule 2 & 3: consonant cluster (including qu)
  const consonantCluster = word.match(/^([^aeiou]?qu|[^aeiouy]+|[^aeiou]+)/);

  if (consonantCluster) {
    const cluster = consonantCluster[0];
    return word.slice(cluster.length) + cluster + 'ay';
  }

  return word + 'ay';
};