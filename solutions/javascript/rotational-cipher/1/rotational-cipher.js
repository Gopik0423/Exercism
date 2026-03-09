//
// Rotational Cipher Implementation
//

/**
 * rotate function
 * @param {string} text - input string
 * @param {number} key - shift value (0–26)
 * @returns {string} encrypted string
 */
export const rotate = (text, key) => {

  let result = "";

  // Loop through every character in the text
  for (let char of text) {

    // Check if character is uppercase letter
    if (char >= "A" && char <= "Z") {

      // Convert letter to number (0–25)
      let code = char.charCodeAt(0) - 65;

      // Apply rotation using modular arithmetic
      let rotated = (code + key) % 26;

      // Convert back to letter
      result += String.fromCharCode(rotated + 65);
    }

    // Check if character is lowercase letter
    else if (char >= "a" && char <= "z") {

      let code = char.charCodeAt(0) - 97;
      let rotated = (code + key) % 26;

      result += String.fromCharCode(rotated + 97);
    }

    // If not a letter (space, punctuation, number)
    // keep it unchanged
    else {
      result += char;
    }
  }

  return result;
};