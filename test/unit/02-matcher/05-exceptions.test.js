// 5. Exceptions
describe('exceptions', () => {
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
  }

  test('compiling android goes as expected', () => {
    const func = () => compileAndroidCode();

    expect(func).toThrow();
    expect(func).toThrow(Error);

    // You can also use a string that must be contained in the error message or a regexp
    expect(func).toThrow('you are using the wrong JDK');
    expect(func).toThrow(/JDK/);

    // Or you can match an exact error message using a regexp like below
    // expect(func).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(func).toThrow(
      /^you are using the wrong JDK!$/,
    ); // Test pass
  });
});
