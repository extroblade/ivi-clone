export const getRemainingFilmAmount = (array: any[], step = 0): string => {
  if (!array?.length) return '';
  const length = array.length - step;
  const lastNumber = +String(length).split('').reverse()[0];
  if (length >= 10 && length <= 20) return ` фильмов`;
  if (lastNumber == 1) return ` фильм`;
  return lastNumber >= 5 ? ` фильмов` : ` фильма`;
};
