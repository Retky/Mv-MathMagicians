import calculate from './calculate';

let object = { total: null, next: null, operation: null };

describe('Operate', () => {
  test('0 return empty', () => {
    const temp = calculate(object, '0');
    object = temp;
    calculate(object, '0');
    expect.objectContaining({});
  });
  test('Add number one', () => {
    const temp = calculate(object, '1');
    object = temp;
    expect(temp.next).toBe('1');
  });
  test('Add .', () => {
    const temp = calculate(object, '.');
    object = temp;
    expect(temp.next).toBe('1.');
  });
  test('Add number 3', () => {
    const temp = calculate(object, '3');
    object = temp;
    expect(temp.next).toBe('1.3');
  });
  test('Add operator "+"', () => {
    const temp = calculate(object, '+');
    object = temp;
    expect.objectContaining({ total: '1.3', next: null, operation: '+' });
  });
  test('Add number .7', () => {
    const temp = calculate(object, '.');
    object = temp;
    const temp2 = calculate(object, '7');
    object = temp2;
    expect.objectContaining({ total: '1.3', next: '0.7', operation: '+' });
  });
  test('Equal', () => {
    const temp = calculate(object, '=');
    object = temp;
    expect.objectContaining({ total: '2', next: null, operation: null });
  });
  test('Change to negative', () => {
    const temp = calculate(object, '+/-');
    object = temp;
    expect.objectContaining({ total: '-2', next: null, operation: null });
  });
  test('AC clear object', () => {
    const temp = calculate(object, 'AC');
    object = temp;
    expect.objectContaining({ total: null, next: null, operation: null });
  });
  test('0 equal', () => {
    const temp = calculate(object, '=');
    object = temp;
    expect.objectContaining({ total: '0', next: null, operation: null });
  });

  test('Only operator', () => {
    object = { total: null, next: null, operation: null };
    const temp = calculate(object, '+');
    object = temp;
    expect.objectContaining({ total: null, next: null, operation: '+' });
  });
  test('Change operator', () => {
    object = { total: '2', next: null, operation: '+' };
    const temp = calculate(object, '-');
    object = temp;
    expect.objectContaining({ total: '2', next: null, operation: '-' });
  });
  test('Operator return default total', () => {
    object = { total: null, next: null, operation: '+' };
    const temp = calculate(object, '-');
    object = temp;
    expect.objectContaining({ total: '0', next: null, operation: '-' });
  });
  test('Try second "." return null', () => {
    object = { total: '1.', next: null, operation: null };
    const temp = calculate(object, '.');
    object = temp;
    expect.objectContaining({});
  });
  test('correct object with "."', () => {
    object = { total: '1', next: null, operation: null };
    const temp = calculate(object, '.');
    object = temp;
    expect.objectContaining({ total: '1', next: '1.', operation: null });
  });
  test('correct object with "." when 0', () => {
    object = { total: null, next: null, operation: null };
    const temp = calculate(object, '.');
    object = temp;
    expect.objectContaining({ total: null, next: '0.', operation: null });
  });
  test('change next to negative', () => {
    object = { total: null, next: '2', operation: null };
    const temp = calculate(object, '+/-');
    object = temp;
    expect.objectContaining({ total: null, next: '-2', operation: null });
  });
  test('+/- without value return empty', () => {
    object = { total: null, next: null, operation: null };
    const temp = calculate(object, '+/-');
    object = temp;
    expect.objectContaining({});
  });
  test('Number affter operator', () => {
    object = { total: '3', next: null, operation: '+' };
    const temp = calculate(object, '1');
    object = temp;
    expect.objectContaining({ total: '3', next: '1', operation: '+' });
  });
  test('"." when next already has return the same', () => {
    object = { total: null, next: '2.', operation: null };
    const temp = calculate(object, '.');
    object = temp;
    expect.objectContaining({ total: null, next: '2.', operation: null });
  });
  test('Add operator after operator & number', () => {
    object = { total: '5', next: '2', operation: '-' };
    const temp = calculate(object, '+');
    object = temp;
    expect.objectContaining({ total: '3', next: null, operation: '+' });
  });
});
