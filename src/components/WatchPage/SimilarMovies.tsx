import React, { FC } from 'react';
import Carousel from '@/components/Carousel/Carousel';
import i18next from 'i18next';
import Card from '@/components/Card/Card';
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

  if (!similar?.total) return;
  return (
    <Carousel
      title={
        i18next.language == 'en' ? `Movies similar to «${enName}»` : `С фильмом «${ruName}» смотрят`
      }
      route={'/'}
      showAll={similar?.total > 15}
    >
      {similar.items.slice(0, 15).map((card) => (
        <Card card={card} info={false} book key={card?.kinopoiskId || card?.filmId} />
      ))}
    </Carousel>
  );
};

export default SimilarMovies;
