const { add } = require("../math")

function doubleSum(x, y) {
  const sum = add(x, y)
  return x + y + sum
}

module.exports = { doubleSum }
