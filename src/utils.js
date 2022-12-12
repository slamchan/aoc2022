const fs = require('fs');

const readInput = (input) => {
  const ret = fs.readFileSync(`./inputs/${input}.txt`, 'utf8');
  return ret;
};

module.exports = { readInput };
