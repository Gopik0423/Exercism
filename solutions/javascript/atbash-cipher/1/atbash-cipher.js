//
// Atbash Cipher Implementation
// a <-> z
// b <-> y
// c <-> x
//

// Normal alphabet
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Reversed alphabet used for Atbash substitution
const reversed = 'zyxwvutsrqponmlkjihgfedcba';

/**
 * This function converts a single character using the Atbash rule
 * If the character is a letter, it finds its position in the alphabet
 * and replaces it with the corresponding letter in the reversed alphabet.
 * If it's a number, it remains unchanged.
 */
function transformChar(char) {
  // Find the position of the character in the alphabet
  const index = alphabet.indexOf(char);

  // If the character exists in the alphabet
  if (index !== -1) {
    // Replace it with the corresponding reversed letter
    return reversed[index];
  }

  // If it is not a letter (ex: number), return it unchanged
  return char;
}

/**
 * Encode function
 * Converts normal text into Atbash cipher text
 */
export const encode = (text) => {

  // Step 1: Convert text to lowercase
  // Step 2: Remove punctuation and spaces
  // Step 3: Keep only letters and numbers
  const cleaned = text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  let encoded = '';

  // Step 4: Convert each character using Atbash rule
  for (let char of cleaned) {
    encoded += transformChar(char);
  }

  // Step 5: Group encoded text into blocks of 5 characters
  return encoded.match(/.{1,5}/g).join(' ');
};

/**
 * Decode function
 * Converts Atbash cipher text back to original text
 */
export const decode = (text) => {

  // Step 1: Remove spaces from encoded text
  const cleaned = text.replace(/\s/g, '');

  let decoded = '';

  // Step 2: Convert each character using the same Atbash rule
  for (let char of cleaned) {
    decoded += transformChar(char);
  }

  // Step 3: Return decoded message
  return decoded;
};