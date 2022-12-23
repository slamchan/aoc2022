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

const dataGroups = readInput('day3-1')
  .split('\r\n')
  .map((x, i, arr) => {
    if (i * 3 >= arr.length - 1) {
      return;
    }
    return values.indexOf([...arr[i * 3]].filter(
      (s) => arr[i * 3 + 1].includes(s) && arr[i * 3 + 2].includes(s)
    )[0]) + 1;
  });
console.log(dataGroups.filter(dg => dg).reduce((a, b) => a + b, 0));
