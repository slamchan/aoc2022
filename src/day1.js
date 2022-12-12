const { readInput } = require('./utils');

console.log('AoC 2022 - Day 1 part 1');
console.log(
  Math.max(
    ...readInput('day1-1')
      .split('\r\n\r\n')
      .map((i) => i.split('\r\n').reduce((a, b) => a + Number(b), 0))
  )
);

console.log('\r\nAoC 2022 - Day 1 part 2');
const caloriesByElf = readInput('day1-1')
  .split('\r\n\r\n')
  .map((i) => i.split('\r\n').reduce((a, b) => a + Number(b), 0));
const maxValues = [];
while (maxValues.length < 3) {
  maxValues.push(
    ...caloriesByElf.splice(
      caloriesByElf.indexOf(Math.max(...caloriesByElf)),
      1
    )
  );
}
console.log(maxValues.reduce((a, b) => a + b, 0));
