const reverseString = (string) => {
  const trimmedString = string.trim();
  const characterCount = trimmedString.length;
  if (characterCount > 0) {
    let newString = '';
    for (let i = trimmedString.length - 1; i >= 0; i -= 1) {
        newString += trimmedString[i];
    }
    return newString;
  }
  return 'Please provide a string';
};

module.exports = reverseString;