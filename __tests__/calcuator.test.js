const { add, sub, divide, multiply } = require('../calculator.js');

describe('Calculator', () => {
  describe('Calculator -> Add', () => {
    test('add(2,3) should be equal 5', () => {
        const output = add(2,3);
        expect(output).toBe(5);
      })
    
      test('add(2,) should be equal 2', () => {
        const output = add(2,);
        expect(output).toBe(2);
      })
    
      test('add(2,hello) should be equal Please provide valid numbers', () => {
        const output = add(2,'hello');
        expect(output).toBe('Please provide valid numbers');
      })
      
      test('add() should be equal Please provide atleast a number', () => {
        const output = add();
        expect(output).toBe('Please provide atleast a number');
      })
    
      test('add(2,3,4) should be equal 9', () => {
        const output = add(2,3,4);
        expect(output).toBe(9);
      })
  })

  describe('Calculator -> Subtract', () => {
    test('sub(2,3) should be equal 5', () => {
        const output = sub(2,3);
        expect(output).toBe(-1);
      })
    
      test('add(2,) should be equal Please provide atleast two numbers', () => {
        const output = sub(2,);
        expect(output).toBe('Please provide atleast two numbers');
      })
    
      test('add(2,hello) should be equal Please provide valid numbers', () => {
        const output = sub(2,'hello');
        expect(output).toBe('Please provide valid numbers');
      })
      
      test('add() should be equal Please provide atleast a number', () => {
        const output = sub();
        expect(output).toBe('Please provide atleast two numbers');
      })
    
      test('add(2,3,4) should be equal 9', () => {
        const output = sub(2,3,4);
        expect(output).toBe(-5);
      })
  });

  describe('Calculator -> Divide', () => {
    test('divide(2,3) should be equal 5', () => {
        const output = divide(4,2);
        expect(output).toBe(2);
      })
    
      test('divide(2,) should be equal Please provide atleast two numbers', () => {
        const output = divide(2,);
        expect(output).toBe('Please provide atleast two numbers');
      })
    
      test('divide(2,hello) should be equal Please provide valid numbers', () => {
        const output = divide(2,'hello');
        expect(output).toBe('Please provide valid numbers');
      })
      
      test('divide(4,2,2) should be equal 1', () => {
        const output = divide(4,2,2);
        expect(output).toBe(1);
      })
    
      test('divide(0,2,2) should be equal 0', () => {
        const output = divide(0,2,2);
        expect(output).toBe(0);
      })
    
      test('divide(4,0,2) should be equal You can not divide by 0', () => {
        const output = divide(4,0,2);
        expect(output).toBe('You can not divide by 0');
      })
  })
  
  describe('Calculator -> Multiply', () => {
    test('multiply(2,3) should be equal 6', () => {
        const output = multiply(2,3);
        expect(output).toBe(6);
      })
    
      test('multiply(2,) should be equal Please provide atleast two numbers', () => {
        const output = multiply(2,);
        expect(output).toBe('Please provide atleast two numbers');
      })
    
      test('multiply(2,hello) should be equal Please provide valid numbers', () => {
        const output = multiply(2,'hello');
        expect(output).toBe('Please provide valid numbers');
      })
        
      test('multiply(4,2,2) should be equal 16', () => {
        const output = multiply(4,2,2);
        expect(output).toBe(16);
      })
    
      test('multiply(0,2,2) should be equal 0', () => {
        const output = multiply(0,2,2);
        expect(output).toBe(0);
      })
    
      test('multiply(4,0,2) should be equal You can not divide by 0', () => {
        const output = multiply(4,0,2);
        expect(output).toBe(0);
      })
  });

});