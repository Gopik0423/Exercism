//
// Run Length Encoding Implementation
//

/**
 * ENCODE FUNCTION
 * Converts a string into compressed RLE format
 * Example: "AABCCCDEEEE" -> "2AB3CD4E"
 */
export const encode = (input) => {

  // If input is empty return empty string
  if (!input) return "";

  let result = "";
  let count = 1;

  // Loop through the string
  for (let i = 1; i <= input.length; i++) {

    // If same character repeats increase count
    if (input[i] === input[i - 1]) {
      count++;
    } else {

      // If count is greater than 1 add number
      if (count > 1) {
        result += count;
      }

      // Add the character
      result += input[i - 1];

      // Reset count
      count = 1;
    }
  }

  return result;
};


/**
 * DECODE FUNCTION
 * Converts RLE format back to original string
 * Example: "2AB3CD4E" -> "AABCCCDEEEE"
 */
export const decode = (input) => {

  let result = "";
  let count = "";

  for (let char of input) {

    // If the character is a number store it
    if (char >= "0" && char <= "9") {
      count += char;
    } else {

      // If no number before character, default count = 1
      let repeat = count === "" ? 1 : parseInt(count);

      // Repeat the character
      result += char.repeat(repeat);

      // Reset count
      count = "";
    }
  }

  return result;
};