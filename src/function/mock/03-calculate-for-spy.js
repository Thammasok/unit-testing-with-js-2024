function doubleSum(x, y) {
  // use add in 01-calculate.js
  const sum = this.add(x, y);
  return x + y + sum;
}

// use spy self test
function add(x, y) {
  return x + y;
}

module.exports = { doubleSum, add };
