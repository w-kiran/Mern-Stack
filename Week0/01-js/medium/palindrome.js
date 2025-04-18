/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Check if the normalized string is equal to its reverse
  const reversedStr = normalizedStr.split('').reverse().join('');
  
  return normalizedStr === reversedStr;
}

module.exports = isPalindrome;
