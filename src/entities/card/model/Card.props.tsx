import { iFilm, iSimilarItems } from '@/shared/types/kinopoiskTypes';

export type CardProps = {
  card: iFilm & iSimilarItems;
  hover?: boolean;
  star?: boolean;
  book?: boolean;
  find?: boolean;
  block?: boolean;
  info?: boolean;
};
