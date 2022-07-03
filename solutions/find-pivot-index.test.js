const pivotIndex = require('./find-pivot-index');
const nums = [
  {
    input: [1,7,3,6,5,6],
    hasPivot: true,
    output: 3
  },
  {
    input: [1,2,3],
    hasPivot: false,
    output: -1
  },
  {
    input: [2,1,-1],
    hasPivot: true,
    output: 0
  },
  {
    input: [0],
    hasPivot: true,
    output: 0
  },
  {
    input: [0,1000],
    hasPivot: true,
    output: 1
  },
];

test('pivotIndex function exists', () => {
  expect(typeof pivotIndex).toBe('function');
});

test('inputs that have pivots return its index value', () => {
  nums.forEach(({ hasPivot, output }) => {
    if (hasPivot) {
      expect(output).toBeGreaterThanOrEqual(0);
    }
  });
});

test('inputs that do not have pivots return -1', () => {
  nums.forEach(({ hasPivot, output }) => {
    if (!hasPivot) {
      expect(output).toBe(-1);
    }
  });
});

nums.forEach(({ input, output }) => {
  test(`[${input}] outputs ${output}`, () => {
    expect(pivotIndex(input)).toBe(output);
  });
});
