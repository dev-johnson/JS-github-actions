const { add } = require('../index');

describe('Test index', () => {
  test('add(): a + b = c', () => {
    const a = 5;
    const b = 5;
    expect(add(a, b)).toBe(10);
  });
});
