import i18next from 'i18next';

type localizeNameProps = {
  nameEn: string;
  nameRu: string;
  nameOriginal?: string;
};
export const localizeName = <T extends localizeNameProps>(object: T): string => {
  return i18next.language === 'en'
    ? object?.nameEn || object?.nameOriginal || object?.nameRu || 'Не указано'
    : object?.nameRu || object?.nameOriginal || object?.nameEn || 'Not found';
};
