import 'i18next';
import { iFetchedFilms, iSimilar } from '@/types/kinopoiskTypes';

export interface CarouselProps {
  title?: string;
  route?: string;
  movies: iFetchedFilms | iSimilar;
  settings?: object;
}
