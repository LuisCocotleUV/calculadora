import { Addition } from './addition';

describe('Addition', () => {
  it('should return 3 if num1 = 1 and num2 = 2', () => {
    const result = Addition.calculate(1, 2);
    expect(result).toBe(3);
  });

  it('should return -3 if num1 = -1 and num2 = -2', () => {
    const result = Addition.calculate(-1, -2);
    expect(result).toBe(-3);
  });

  it('should return 5 if num1 = 5 and num2 = 0', () => {
    const result = Addition.calculate(5, 0);
    expect(result).toBe(5);
  });
});
