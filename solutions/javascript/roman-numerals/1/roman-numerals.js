//
// Roman Numerals Implementation
//

/**
 * Convert an Arabic number to Roman numeral
 * @param {number} number
 * @returns {string}
 */
export const toRoman = (number) => {

  // Mapping of Roman symbols and their values
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  let result = "";

  // Loop through each Roman value
  for (let i = 0; i < romanMap.length; i++) {

    // While number is greater than or equal to the value
    while (number >= romanMap[i].value) {

      // Add symbol to result
      result += romanMap[i].symbol;

      // Subtract value from number
      number -= romanMap[i].value;
    }
  }

  return result;
};