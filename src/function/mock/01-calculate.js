const math = require('../math');

function doubleSum(x, y) {
  const sum = math.add(x, y);
  return x + y + sum;
}

module.exports = { doubleSum };
