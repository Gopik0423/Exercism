export const findAnagrams = (word, candidates) => {
  const normalize = (str) =>
    str.toLowerCase().split('').sort().join('');

  const normalizedWord = normalize(word);

  return candidates.filter(candidate => {
    // Exclude identical words (case-insensitive)
    if (candidate.toLowerCase() === word.toLowerCase()) {
      return false;
    }

    return normalize(candidate) === normalizedWord;
  });
};