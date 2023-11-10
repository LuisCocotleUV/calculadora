import { Multiplication } from './multiplication';

describe('Multiplication', () => {
  it('should return 2 if num1 = 1 and num2 = 2', () => {
    const result = Multiplication.calculate(1, 2);
    expect(result).toBe(2);
  });

  it('should return 2 if num1 = -1 and num2 = -2', () => {
    const result = Multiplication.calculate(-1, -2);
    expect(result).toBe(2);
  });

  it('should return 5 if num1 = 5 and num2 = 0', () => {
    const result = Multiplication.calculate(5, 0);
    expect(result).toBe(0);
  });
});