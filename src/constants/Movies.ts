export type MovieVariants = 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'VIDEO';

interface iFilmValues {
  ruName: string;
  ruNameSingle: string;
  enName: string;
  enNameSingle: string;
  path: string;
}
export const movieTypes: Record<MovieVariants, iFilmValues> = {
  FILM: {
    ruName: 'Фильмы',
    ruNameSingle: 'Фильм',
    enName: 'Movies',
    enNameSingle: 'Movie',
    path: '/movies',
  },
  TV_SHOW: {
    ruName: 'ТВ шоу',
    ruNameSingle: 'ТВ шоу',
    enName: 'TV show',
    enNameSingle: 'TV show',
    path: '/series',
  },
  TV_SERIES: {
    ruName: 'Сериалы',
    ruNameSingle: 'Сериал',
    enName: 'Series',
    enNameSingle: 'Series',
    path: '/series',
  },
  MINI_SERIES: {
    ruName: 'Мультфильмы',
    ruNameSingle: 'Мультфильм',
    enName: 'Cartoons',
    enNameSingle: 'Cartoon',
    path: '/animation',
  },
  VIDEO: {
    ruName: 'Видео',
    ruNameSingle: 'Видео',
    enName: 'Video',
    enNameSingle: 'Video',
    path: '/movies',
  },
};
