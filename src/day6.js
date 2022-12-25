const { readInput } = require('./utils');

console.log('AoC 2022 - Day 6 part 1');

const parsed = readInput('day6-1');

const codeLength = 4;
const getChars = string => {
    const ret = [];
    for (let i = 0; i < string.length; i++){
        ret.push(string.charAt(i));
    }
    return ret;
}

let counter = codeLength;
for (let i = 0; i < parsed.length - codeLength; i++) {
    const set = new Set(getChars(parsed.substring(i, i + codeLength)));
    if (set.size === codeLength) break;
    counter++;
}

console.log(counter);

console.log('AoC 2022 - Day 6 part 1');

const messageLength = 14;

counter = messageLength;
for (let i = 0; i < parsed.length - messageLength; i++) {
    const set = new Set(getChars(parsed.substring(i, i + messageLength)));
    if (set.size === messageLength) break;
    counter++;
}

console.log(counter);