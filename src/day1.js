const { readInput } = require('./utils');

console.log('AoC 2022 - Day 1 part 1');
const input = Math.max(
  ...readInput('day1-1')
    .split('\r\n\r\n')
    .map((i) => i.split('\r\n').reduce((a, b) => a + Number(b), 0))
);
console.log(input);
