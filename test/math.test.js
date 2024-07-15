const { add } = require('../src/function/math');

describe('Math function', () => {
  test('should add 5 by 3', () => {
    // Arrange

    // Action
    const result = add(5, 3);

    // Assert
    expect(result).toEqual(8);
  });
});
