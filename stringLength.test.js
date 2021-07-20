const stringLength =  require('./stringLength.js');

test('length of helloworld to equal 10', () => {
  //Arrange
  const string  = 'helloworld';

  // Act
  const equalToTen = stringLength(string);

  // Assert
  expect(equalToTen).toBe(10);
});

test('length of helloworld to greater than 1', () => {
  //Arrange
  const string  = 'helloworld';

  // Act
  const greaterThanOne = stringLength(string);

  // Assert
  expect(greaterThanOne).toBeGreaterThan(1);
});

test('length of helloworld to less than 10', () => {
  //Arrange
  const string  = 'helloworld';

  // Act
  const lessThanTen = stringLength(string);

  // Assert
  expect(lessThanTen).toBeLessThanOrEqual(10);
});

test('hello wordbbbbbb to equal Please ensure string length is greater than 1 and less than 10', () => {
  //Arrange
  const string = 'hello worldbbbbbb';

  // Act
  const output = stringLength(string);
 
  // Assert

  expect(output).toBe('Please ensure string length is greater than 1 and less than 10')

});