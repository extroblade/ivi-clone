export const getRemainingFilmAmount = (array: any[]): string => {
  const length = array.length - 8;
  const lastNumber = +String(length).split('').reverse()[0];
  if (length >= 10 && length <= 20) return ` фильмов`;
  if (lastNumber == 1) return ` фильм`;
  return lastNumber >= 5 ? ` фильмов` : ` фильма`;
};
