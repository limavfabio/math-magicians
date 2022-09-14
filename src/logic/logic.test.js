import calculate from './calculate';
import operate from './operate';

describe('calculate.js tests', () => {
  test('Addition', () => {
    const buttonName = '+';
    const object = {
      total: '9',
      next: '-15',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).total).toBe('-6');
    expect(calculate(object, buttonName).next).toBe(null);
    expect(calculate(object, buttonName).operation).toBe(buttonName);
  });

  test('Multiplication', () => {
    const buttonName = '*';
    const obj = {
      total: '5',
      next: '9',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('45');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });

  test('Substraction', () => {
    const buttonName = '-';
    const obj = {
      total: '3540',
      next: '2270',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('1270');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });

  test('Division', () => {
    const buttonName = '/';
    const obj = {
      total: '3780',
      next: '3',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('1260');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });

  test('AC Button', () => {
    const buttonName = 'AC';
    const object = {
      total: '78900',
      next: '235',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).total).toBe(null);
    expect(calculate(object, buttonName).next).toBe(null);
    expect(calculate(object, buttonName).operation).toBe(null);
  });

  test('Dot notation', () => {
    const buttonName = '.';
    const object = {
      total: '5760',
      next: '1680',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).next).toBe('1680.');
    expect(calculate(object, buttonName).operation).toBe(buttonName);
  });

  test('Inversion Operator', () => {
    const buttonName = '+/-';
    const object = {
      total: '770',
      next: '-3306',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).next).toBe('3306');
    expect(calculate(object, buttonName).operation).toBe(buttonName);
  });

  test('Return Result (=)', () => {
    const buttonName = '=';
    const object = {
      total: '757',
      next: '-3',
      operation: '*',
    };
    expect(calculate(object, buttonName).total).toBe('-2271');
    expect(calculate(object, buttonName).next).toBe(null);
    expect(calculate(object, buttonName).operation).toBe(null);
  });
});

describe('Operate Function Direct Calls', () => {
  test('Addition', () => {
    expect(operate(2538, 3, '+')).toBe('2541');
  });

  test('Multiplication', () => {
    expect(operate(27, 6, '*')).toBe('162');
  });

  test('Subtraction', () => {
    expect(operate(2237, 23, '-')).toBe('2214');
  });

  test('Division', () => {
    expect(operate(2580, 5, '/')).toBe('516');
  });

  test('Modulus', () => {
    expect(operate(2350, 30, '%')).toBe('10');
  });
});
