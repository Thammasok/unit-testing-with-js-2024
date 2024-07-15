const _ = require('lodash');
const { getUserByUserName } = require('../../../src/function/mock/02-user');

describe('Spy library', () => {
  test('Should be called from findIndex with spy', () => {
    const keyword = 'barney';

    const findIndexSpy = jest.spyOn(_, 'findIndex').mockReturnValue(2);

    getUserByUserName(keyword);

    expect(findIndexSpy).toHaveBeenCalled();
  });

  test('Should be return user info from keyword with spy', () => {
    const keyword = 'barney';

    jest.spyOn(_, 'findIndex').mockReturnValue(2);

    const actual = getUserByUserName(keyword);

    // expect(findIndexSpy).toHaveBeenCalled()
    expect(actual).toMatchObject({
      user: 'pebbles',
      birthday: '2000-01-01',
      age: 27,
    });
  });
});
