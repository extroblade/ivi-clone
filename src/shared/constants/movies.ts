import i18next from 'i18next';

import { LanguageVariants } from '@/shared/constants/languages';
import { MovieVariants } from '@/shared/types/kinopoiskTypes';

export const movieTypes: Record<
  MovieVariants,
  {
    ru: string;
    en: string;
    path: string;
  }
> = {
  FILM: {
    ru: 'Фильм',
    en: 'Movie',
    path: '/movies',
  },
  TV_SHOW: {
    ru: 'ТВ шоу',
    en: 'TV show',
    path: '/series',
  },
  TV_SERIES: {
    ru: 'Сериал',
    en: 'Series',
    path: '/series',
  },
  SERIES: {
    ru: 'Сериал',

    en: 'Series',
    path: '/series',
  },
  MINI_SERIES: {
    ru: 'Мультфильм',

    en: 'Cartoon',
    path: '/animation',
  },
  VIDEO: {
    ru: 'Видео',

    en: 'Video',
    path: '/movies',
  },
};
export const getNameByType = (type: MovieVariants): string => {
  return movieTypes?.[type]?.[i18next.language as LanguageVariants] || 'Тип';
};

export const getPathByType = (type: MovieVariants): string => {
  return movieTypes?.[type]?.path || '/movies';
};
