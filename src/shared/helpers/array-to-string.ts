export const arrayToString = (array: any[], key?: string): string => {
  return array.reduce((acc, next, index) => {
    if (!index) {
      return acc + (key ? next?.[key] : next);
    }
    return acc + ', ' + (key ? next?.[key] : next);
  }, '');
};
