import { Division } from './division';

describe('Division', () => {
  it('should return 5 if num1 = 10 and num2 = 2', () => {
    const result = Division.calculate(10, 2);
    expect(result).toBe(5);
  });

  it('should return -5 if num1 = -20 and num2 = 4', () => {
    const result = Division.calculate(-20, 4);
    expect(result).toBe(-5);
  });

  it('should return 5 if num1 = 5 and num2 = 1', () => {
    const result = Division.calculate(5, 1);
    expect(result).toBe(5);
  });
});