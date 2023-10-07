import { useRouter } from 'next/router';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@/entities/card';
import { Carousel } from '@/entities/carousel';
import { useFetchFilmSimilarQuery } from '@/shared/services';

export const SimilarMovies: FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { data: similar } = useFetchFilmSimilarQuery(
    { id: Number(router.query?.id) },
    { skip: !router.query?.id }
  );

  if (!similar?.total) return <></>;
  return (
    <Carousel
      settings={{ slidesToShow: Math.min(7, similar.items.length) }}
      title={t('descriptions.similar') || ''}
      route={'/'}
    >
      {similar.items.map((card) => (
        <Card key={card.filmId} card={card} book info={false} />
      ))}
    </Carousel>
  );
};
