const { readInput } = require('./utils');

console.log('AoC 2022 - Day 5 part 1');

const parsed = readInput('day5-1').split('\r\n');

const startSit = parsed.slice(0, parsed.indexOf(''));
const guide = startSit.splice(startSit.length - 1, 1)[0];
const stacks = new Array(9);
startSit.forEach((s, i, arr) => {
  let counter = 0;
  for (const x of guide) {
    if (x === ' ') {
      counter += 1;
      continue;
    }
    if (s[counter] === ' ') {
      counter += 1;
      continue;
    }
    if (!stacks[x-1]) stacks[x-1] = [];
    stacks[x-1].unshift(s[counter]);
    counter += 1;
  }
});

const instructions = parsed.slice(parsed.indexOf('') + 1);
const parsedInstructions = instructions.map(i => {
    const split = i.split(' ');
    return {
        amount: split[1],
        from: split[3],
        to: split[5],
    }
})

parsedInstructions.forEach(p => {
    for (let i = 0; i < p.amount; i++){
        stacks[p.to-1].push(stacks[p.from-1].pop());
    }
})

let res = '';
stacks.forEach(s => {
    res += s[s.length-1];
});
console.log(res);

console.log('AoC 2022 - Day 5 part 2');
