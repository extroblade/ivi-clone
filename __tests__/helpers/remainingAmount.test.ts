import { getRemainingFilmAmount } from '../../src/helpers/remainingAmount';

describe('remaining amount', () => {
  test('nonempty', () => {
    expect(getRemainingFilmAmount(new Array(15))).toBe(' фильмов');
  });
  test('empty', () => {
    expect(getRemainingFilmAmount([])).toBe('');
  });
});
