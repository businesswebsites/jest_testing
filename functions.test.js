const functions = require('./functions');

test('adds 1 + 2 to equal 3', () => {
  expect(functions.sum(1, 2)).toBe(3);
});

test('multiply 2 * 3 to equal 6', ()=>{
  expect(functions.product(2, 3)).toBe(6);
});

test('subtract 2 - 1 to equal 1', () => {
  expect(functions.subtract(2, 1)).toBe(1);
});

test('differentiate 6 / 3 to equal 2', ()=>{
  expect(functions.diff(6, 3)).toBe(2);
});

test('bigSum of 1000 and 2005 is 3005', ()=>{
  const value = functions.bigSum(1000, 2005);
  expect(value).toBeGreaterThan(3000);
  expect(value).toBe(3005);
  expect(value).toBeLessThan(3006);
  expect(value).toBe
});