const capitalize = require('../capitalize.js');

test('hello should be equal Hello', () => {
 expect(capitalize('hello')).toBe('Hello');
});

test('hello world should be equal Hello World', () => {
  expect(capitalize('hello world')).toBe('Hello World');
});

test('123 should be equal Please provide a string', () => {
  expect(capitalize(123)).toBe('Please provide a string');
});