import React, { FC } from 'react';
import Carousel from '@/UI/Carousel/Carousel';
import i18next from 'i18next';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { iSimilar } from '@/types/kinopoiskTypes';
interface iSimilarCarousel {
  similar: iSimilar;
}
const SimilarMovies: FC<iSimilarCarousel> = ({ similar }) => {
  const { currentMovie } = useAppSelector(selectModal);
  const enName = currentMovie?.nameEn || currentMovie?.nameOriginal || currentMovie?.nameRu || '';
  const ruName = currentMovie?.nameRu || currentMovie?.nameOriginal || currentMovie?.nameEn || '';
  const title =
    i18next.language == 'en' ? `Movies similar to «${enName}»` : `С фильмом «${ruName}» смотрят`;

  if (!similar?.total) return;
  return <Carousel title={title} movies={similar} route={'/'} />;
};

export default SimilarMovies;
