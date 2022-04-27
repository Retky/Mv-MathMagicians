import operate from './operate';

describe('Operate', () => {
  test('SUM', () => {
    expect(operate(2, 3, '+')).toBe('5')
  });
});
