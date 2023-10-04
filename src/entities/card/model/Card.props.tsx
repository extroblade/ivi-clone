import { iFilm, iSimilarItems } from '@/shared/types/kinopoiskTypes';

export type CardProps = {
  card: Partial<iFilm> & Partial<iSimilarItems>;
  hover?: boolean;
  star?: boolean;
  book?: boolean;
  find?: boolean;
  block?: boolean;
  info?: boolean;
};
