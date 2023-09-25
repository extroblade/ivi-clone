import { getRemainingFilmAmount } from '@/shared/helpers/remainingAmount';

const testArr = [0, 1, 2, 5, 11, 20, 21, 25];

describe('remaining amount', () => {
  testArr.map((i) => {
    test(`${i} length`, () => {
      const j = 0;
      const arr = new Array(i);
      if (i - j <= 0) {
        expect(getRemainingFilmAmount(arr.length)).toBe('');
        return;
      }
      const lastNumber = +String(i - j)
        .split('')
        .reverse()[0];
      if (i - j >= 10 && i - j <= 20) {
        expect(getRemainingFilmAmount(arr.length)).toBe(' фильмов');
        return;
      }
      if (lastNumber == 1) {
        expect(getRemainingFilmAmount(arr.length)).toBe(' фильм');
        return;
      }
      if (lastNumber >= 5) {
        expect(getRemainingFilmAmount(arr.length)).toBe(' фильмов');
        return;
      } else {
        expect(getRemainingFilmAmount(arr.length)).toBe(' фильма');
        return;
      }
    });
  });
});
