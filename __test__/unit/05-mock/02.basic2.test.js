// solution 2
const { doubleSum } = require('../../../src/function/mock/01-calculate');
const math = require('../../../src/function/math');

jest.mock('../../../src/function/math');

describe('Basic Mock solution 2', () => {
  it('should return 20 when call doubleSum and send 1 and 2', () => {
    // Arrange
    const numberOne = 1;
    const numberTwo = 2;
    const expected = 20;

    // Implement Mock in it.
    const addMock = math.add;
    addMock.mockReturnValue(17);

    const total = doubleSum(numberOne, numberTwo);

    expect(addMock).toHaveBeenCalled();
    expect(total).toBe(expected);
  });

  it('should return 110 when call doubleSum and send 1 and 2', () => {
    // Arrange
    const numberOne = 99;
    const numberTwo = 1;
    const expected = 100;

    const addMock = math.add;
    addMock.mockReturnValue(0);

    const total = doubleSum(numberOne, numberTwo);

    expect(addMock).toHaveBeenCalled();
    expect(total).toBe(expected);
  });
});
