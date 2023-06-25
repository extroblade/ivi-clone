export const getRemainingFilmAmount = (array: any[], step = 0): string => {
  const baseLength = array.length || 0;
  const length = baseLength - step;
  if (length <= 0) return '';
  const lastNumber = +String(length).split('').reverse()[0];
  if (length >= 10 && length <= 20) return ` фильмов`;
  if (lastNumber == 1) return ` фильм`;
  return lastNumber >= 5 ? ` фильмов` : ` фильма`;
};
