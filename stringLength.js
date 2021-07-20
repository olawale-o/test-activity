const stringLength = (string) => {
  const trimmedString = string.trim();
  const characterCount = trimmedString.length;
  if (characterCount >= 1 && characterCount <= 10) {
    return characterCount;
  }
  return 'Please ensure string length is greater than 1 and less than 10';
  
};

module.exports = stringLength;