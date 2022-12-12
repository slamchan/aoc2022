const { readInput } = require('./utils');

console.log('AoC 2022 - Day 2 part 1');

const parsed = readInput('day2-1')
  .split('\r\n')
  .map((r) => r.split(' '));

const shapes = { X: 1, Y: 2, Z: 3, A: 1, B: 2, C: 3 };
const results = { w: 6, d: 3, l: 0 };

const calRes = (a, b) => {
  if (shapes[b] !== 1 && shapes[b] === shapes[a] + 1)
    return shapes[b] + results.w;
  if (shapes[b] === 1 && shapes[a] === 3) return shapes[b] + results.w;
  if (shapes[b] === shapes[a]) return shapes[b] + results.d;
  return shapes[b] + results.l;
};

console.log(parsed.map((p) => calRes(p[0], p[1])).reduce((a, b) => a + b, 0));
console.log('\r\nAoC 2022 - Day 2 part 2');

const points = { X: 0, Y: 3, Z: 6 };
const mod = { X: -1, Y: 0, Z: 1 };
const calRes2 = (a, b) => {
  const shape =
    shapes[a] + mod[b] === 4
      ? 1
      : shapes[a] + mod[b] === 0
      ? 3
      : shapes[a] + mod[b];
  return shape + points[b];
};
console.log(parsed.map((p) => calRes2(p[0], p[1])).reduce((a, b) => a + b, 0));
