const { readInput } = require('./utils');

console.log('AoC 2022 - Day 3 part 1');

const parsed = readInput('day3-1')
  .split('\r\n')
  .map((x) => ({
    a: x.substring(0, x.length / 2),
    b: x.substring(x.length / 2, x.length)
  }));

const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let res = 0;

parsed.forEach((p) => {
  for (const x of p.a) {
    if (p.b.includes(x)) {
      res += values.indexOf(x) + 1;
      break;
    }
  }
});

console.log(res);

console.log('\r\nAoC 2022 - Day 3 part 2');
