import 'i18next';
import { iFetchedFilms, iFilm, iSimilar } from '@/types/kinopoiskTypes';

export interface CarouselProps {
  title?: string;
  route?: string;
  movies?: iFetchedFilms | iSimilar | iFilm[];
  settings?: object;
}
