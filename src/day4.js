const { readInput } = require('./utils');

console.log('AoC 2022 - Day 4 part 1');

const parsed = readInput('day4-1').split('\r\n');

let res = 0;
parsed.forEach((x) => {
  const pairs = x.split(',').map((p) => p.split('-').map((n) => Number(n)));
  if (
    pairs[0][0] >= pairs[1][0] &&
    pairs[0][0] <= pairs[1][1] &&
    pairs[0][1] <= pairs[1][1] &&
    pairs[0][1] >= pairs[1][0]
  ) {
    res += 1;
    return;
  }
  if (
    pairs[1][0] >= pairs[0][0] &&
    pairs[1][0] <= pairs[0][1] &&
    pairs[1][1] <= pairs[0][1] &&
    pairs[1][1] >= pairs[0][0]
  ) {
    res += 1;
    return;
  }
  return;
});

console.log(res);

console.log('AoC 2022 - Day 4 part 2');

res = 0;
parsed.forEach((x) => {
  const pairs = x.split(',').map((p) => p.split('-').map((n) => Number(n)));
  if (pairs[0][0] >= pairs[1][0] && pairs[0][0] <= pairs[1][1]) {
    res += 1;
    return;
  }
  if (pairs[0][1] <= pairs[1][1] && pairs[0][1] >= pairs[1][0]) {
    res += 1;
    return;
  }
  if (pairs[1][0] >= pairs[0][0] && pairs[1][0] <= pairs[0][1]) {
    res += 1;
    return;
  }
  if (pairs[1][1] <= pairs[0][1] && pairs[1][1] >= pairs[0][0]) {
    res += 1;
    return;
  }
  return;
});

console.log(res);