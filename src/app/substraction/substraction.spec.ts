import { Substraction } from './substraction';

describe('Substraction', () => {
  it('should return -1 if num1 = 1 and num2 = 2', () => {
    const result = Substraction.calculate(1, 2);
    expect(result).toBe(-1);
  });

  it('should return 1 if num1 = -1 and num2 = -2', () => {
    const result = Substraction.calculate(-1, -2);
    expect(result).toBe(1);
  });

  it('should return 5 if num1 = 5 and num2 = 0', () => {
    const result = Substraction.calculate(5, 0);
    expect(result).toBe(5);
  });
});