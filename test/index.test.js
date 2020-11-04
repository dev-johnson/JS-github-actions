const { add } = require('../src/index');
describe('Test index', () => {
  console.log('should throw eslint error');
  test('add(): a + b = c', () => {
    const a = 5;
    const b = 5;
    expect(add(a, b)).toBe(10);
  });
});
