const reverseString = require('./reverseString.js');

test('hello should equal olleh', () => {
  // Arrange
  const string = 'hello';
  const output  = 'olleh';

  // Act
  const result = reverseString(string);

  // Assert
  expect(result).toBe(output);
});

test(' should equal Please provide a string', () => {
  // Arrange
  const string = '';
  const output  = 'Please provide a string';

  // Act
  const result = reverseString(string);
  
  // Assert
  expect(result).toBe(output);
});