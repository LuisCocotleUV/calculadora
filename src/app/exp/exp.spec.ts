import { Exp } from './exp';

describe('Exp', () => {
  it('should return the correct power of a positive base and exponent', () => {
    const result = Exp.calculate(2, 3);
    expect(result).toBe(8);
  });

  it('should return 1 for any number to the power of 0', () => {
    const result = Exp.calculate(5, 0);
    expect(result).toBe(1);
  });

  it('should return the correct power of a negative base and positive exponent', () => {
    const result = Exp.calculate(-2, 3);
    expect(result).toBe(-8);
  });
});