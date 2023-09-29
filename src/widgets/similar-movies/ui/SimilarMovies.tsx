import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@/entities/card';
import { Carousel } from '@/entities/carousel';

import { SimilarProps } from '../model/props';

export const SimilarMovies: FC<SimilarProps> = ({ similar }) => {
  const { t } = useTranslation();

  if (!similar?.total) return <></>;
  return (
    <Carousel title={t('descriptions.similar') || ''} route={'/'}>
      {similar.items.map((card) => (
        <Card key={card.filmId} card={card} book info={false} />
      ))}
    </Carousel>
  );
};
