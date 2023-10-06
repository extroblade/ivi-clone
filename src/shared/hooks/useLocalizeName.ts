import i18next from 'i18next';
import { useMemo } from 'react';

export type useLocalizeNameProps = {
  nameEn?: string;
  nameRu?: string;
  nameOriginal?: string;
};
export const useLocalizeName = <T extends useLocalizeNameProps>(object?: T): string | undefined => {
  const name = useMemo(() => {
    return i18next.language === 'en'
      ? object?.nameEn || object?.nameOriginal || object?.nameRu
      : object?.nameRu || object?.nameOriginal || object?.nameEn;
  }, [object, object?.nameEn, object?.nameRu, object?.nameOriginal, i18next.language]);
  return name;
};
