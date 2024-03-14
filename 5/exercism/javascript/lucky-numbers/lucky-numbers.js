// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join("")) + Number(array2.join("")); 
  throw new Error('Implement the twoSum function');
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {

  if (String(value) === Array.from(String(value)).reverse().join("")) {
    return true;
  } else {
    return false;
  }
  
  throw new Error('Implement the luckyNumber function');
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return 'Required field'
  } else if (!Number(input)) {
    return "Must be a number besides 0"
  } else {
    return ""
  }
  throw new Error('Implement the errorMessage function');
}



// - If the user types something into a field, the associated value is always a string even if the user only typed in numbers.
// - If the user types something but deletes it again, the variable will be an empty string.
// - Before the user even started typing, the variable can be `undefined` or `null`.

// Write a function `errorMessage` that accepts the user input as a parameter.
// If the user did not provide any input, `errorMessage` should return `'Required field'`.
// If the input does not represent a non-zero number (according to the JavaScript conversion rules), `'Must be a number besides 0'` should be returned.
// In all other cases, you can assume the input is valid, the return value should be an empty string.
