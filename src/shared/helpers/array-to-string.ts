export const arrayToString = <T>(array?: T[], key?: keyof T): string => {
  return (
    array?.reduce((acc, next, index) => {
      if (!index) {
        return acc + (key ? next?.[key] : next);
      }
      return acc + ', ' + (key ? next?.[key] : next);
    }, '') || 'Информация не найдена'
  );
};
