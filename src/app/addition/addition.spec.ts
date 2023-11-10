import { Addition } from './addition';

describe('Addition', () => {
  it('should return the sum of two numbers', () => {
    const result = Addition.calculate(1, 2);
    expect(result).toBe(3);
  });

  it('should return the sum of negative numbers', () => {
    const result = Addition.calculate(-1, -2);
    expect(result).toBe(-3);
  });

  it('should return the sum of a number and zero', () => {
    const result = Addition.calculate(5, 0);
    expect(result).toBe(5);
  });
});
