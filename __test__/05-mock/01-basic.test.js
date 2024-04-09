const { doubleSum } = require("../../src/function/mock/01-calculate")

// 1. solution 1
jest.mock('../../src/function/math.js', () => ({
  add: jest.fn((x, y) => {
    if (x === 1 && y === 2) return 20

    return x + y
  })
}))

describe('Basic Mock solution 1', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('should return 23 when call doubleSum and send 1 and 2', () => {
    const numberOne = 1
    const numberTwo = 2
    // if not mock return value (1 + 2) + (1 + 2) = 6
    const expected = 23

    const result = doubleSum(numberOne, numberTwo)

    expect(result).toBe(expected)
  })

  test('should return 23 when call doubleSum and send 10 and 2', () => {
    const numberOne = 10
    const numberTwo = 2
    const expected = 24

    const result = doubleSum(numberOne, numberTwo)

    expect(result).toBe(expected)
  })
})
