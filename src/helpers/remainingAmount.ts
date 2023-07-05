export const getRemainingFilmAmount = (length): string => {
  if (length <= 0) return '';
  const lastNumber = +String(length).split('').reverse()[0];
  if (length >= 10 && length <= 20) return ` фильмов`;
  if (lastNumber == 1) return ` фильм`;
  return lastNumber >= 5 ? ` фильмов` : ` фильма`;
};

export const getRate = (number: number) => {
  const lastNumber = +String(number).split('').reverse()[0];
  if (number >= 10 && number <= 20) return ` оценок`;
  if (lastNumber == 1) return ` оценка`;
  return lastNumber >= 5 ? ` оценок` : ` оценки`;
};
