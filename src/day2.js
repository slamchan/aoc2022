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

console.log(
  parsed
    .map((p) => {
      const res = calRes(p[0], p[1]);
      return res;
    })
    .reduce((a, b) => a + b, 0)
);

console.log('\r\nAoC 2022 - Day 2 part 2');
