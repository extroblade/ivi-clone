import { writeDate } from '../../src/helpers/writeDate';

describe('remaining amount', () => {
  test('zero', () => {
    expect(writeDate(0)).toBe('01.01.1970');
  });
  test('60 years', () => {
    expect(writeDate(60 * 365 * 24 * 60 * 60 * 1000)).toBe('17.12.2029');
  });
});
