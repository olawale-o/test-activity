const add = (...numbers) => {
  if (numbers.length < 1) {
    return 'Please provide atleast a number'
  }
  const isANumber = numbers.every((number) => typeof number === 'number');
  if (!isANumber) {
    return 'Please provide valid numbers'
  }
  const sum = numbers.reduce((a,b) => a + b);
  return sum;
};

const sub = (...numbers) => {
  if (numbers.length < 2) {
    return 'Please provide atleast two numbers'
  }
  const isANumber = numbers.every((number) => typeof number === 'number');
  if (!isANumber) {
    return 'Please provide valid numbers'
  }
  const sub = numbers.reduce((a,b) => a - b);
  return sub;
};

const divide = (...numbers) => {
  const isANumber = numbers.every((number) => typeof number === 'number');
  if (!isANumber) {
    return 'Please provide valid numbers'
  }
  if (numbers.length < 2) {
    return 'Please provide atleast two numbers'
  }
  const [a, ...rest] = numbers;
  if (rest.includes(0)) {
    return 'You can not divide by 0';
  }

  const div = numbers.reduce((a,b) => a / b);
  return div;
}

const multiply = (...numbers) => {
  const isANumber = numbers.every((number) => typeof number === 'number');
  if (!isANumber) {
    return 'Please provide valid numbers'
  }
  if (numbers.length < 2) {
    return 'Please provide atleast two numbers'
  }
  
  const mul = numbers.reduce((a,b) => a * b);
   return mul;
}

module.exports = { add, sub, divide, multiply };