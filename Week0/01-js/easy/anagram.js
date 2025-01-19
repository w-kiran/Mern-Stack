function isAnagram(str1, str2) {
  // Helper function to clean and sort a string
  function cleanString(str) {
      return str.toLowerCase().split('').sort().join('');
  }

  // Clean and sort both strings
  const cleanedStr1 = cleanString(str1);
  const cleanedStr2 = cleanString(str2);

  // Compare the cleaned and sorted strings
  if(cleanedStr1 === cleanedStr2)
    {
      return true;
    }
  else 
    {
      return false;
    }
}

module.exports = isAnagram;
