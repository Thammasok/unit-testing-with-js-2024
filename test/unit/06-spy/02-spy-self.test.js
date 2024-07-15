const calculate = require('../../../src/function/mock/03-calculate-for-spy');

describe('Spy self', () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  it('Should be called add when call doubleSum', () => {
    const x = 2;
    const y = 2;

    const calculateAddSpy = jest.spyOn(calculate, 'add');

    calculate.doubleSum(x, y);

    expect(calculateAddSpy).toHaveBeenCalledTimes(1);
  });
});
