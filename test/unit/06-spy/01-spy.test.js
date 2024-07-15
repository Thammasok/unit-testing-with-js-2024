const calculate = require('../../../src/function/mock/01-calculate');
const math = require('../../../src/function/math');

describe('Spy', () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  test('Should be called add when call doubleSum', () => {
    const x = 2;
    const y = 2;

    const mathAddSpy = jest.spyOn(math, 'add');

    calculate.doubleSum(x, y);

    expect(mathAddSpy).toHaveBeenCalledTimes(1);
  });

  test('Should be return 9 when call doubleSum and send 2, 2', () => {
    const x = 2;
    const y = 2;
    const actual = 104;

    // ใช้ spyOn ในการทำ Mock / Stub ได้
    const mathAddSpy = jest.spyOn(math, 'add').mockReturnValue(100);
    // jest.spyOn(math, 'add').mockReturnValue(100);

    const result = calculate.doubleSum(x, y);

    expect(mathAddSpy).toBeCalled();
    // expect(mathAddSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe(actual);
  });
});
