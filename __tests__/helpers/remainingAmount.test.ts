import { getRemainingFilmAmount } from '@/helpers/remainingAmount';

describe('remaining amount', () => {
  for (let j = -100; j < 100; j++) {
    for (let i = 0; i < 100; i++) {
      test(`${i} length, -${j} step`, () => {
        const arr = new Array(i);
        if (i - j <= 0) {
          expect(getRemainingFilmAmount(arr, j)).toBe('');
          return;
        }
        const lastNumber = +String(i - j)
          .split('')
          .reverse()[0];
        if (i - j >= 10 && i - j <= 20) {
          expect(getRemainingFilmAmount(arr, j)).toBe(' фильмов');
          return;
        }
        if (lastNumber == 1) {
          expect(getRemainingFilmAmount(arr, j)).toBe(' фильм');
          return;
        }
        if (lastNumber >= 5) {
          expect(getRemainingFilmAmount(arr, j)).toBe(' фильмов');
          return;
        } else {
          expect(getRemainingFilmAmount(arr, j)).toBe(' фильма');
          return;
        }
      });
    }
  }
});
