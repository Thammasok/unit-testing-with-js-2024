// 3. Strings
describe('strings', () => {
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
});
