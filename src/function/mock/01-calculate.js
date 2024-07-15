const math = require('../math');

function doubleSum(x, y) {
  // use add in math.js
  const sum = math.add(x, y);

  return x + y + sum;
}

// module.exports = { doubleSum, add };
module.exports = { doubleSum };
