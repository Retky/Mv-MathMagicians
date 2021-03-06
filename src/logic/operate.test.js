import operate from './operate';

describe('Operate', () => {
  test('SUM', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });
  test('REST', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });
  test('MULTIPLY', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });
  test('DIVIDE', () => {
    expect(operate(8, 4, '÷')).toBe('2');
  });
  test('ERROR', () => {
    expect(operate(8, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('REMAINDER', () => {
    expect(operate(8, 3, '%')).toBe('2');
  });
});
