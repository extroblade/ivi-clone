import i18next from 'i18next';
import { useMemo } from 'react';

export const useMovieTitle = (name: string | undefined): string => {
  const title = useMemo(() => {
    return i18next.language == 'en'
      ? `Movie ${name} watch online`
      : `Фильм ${name} смотреть онлайн`;
  }, [name, i18next.language]);
  if (!name) return 'Loading...';

  return title;
};
