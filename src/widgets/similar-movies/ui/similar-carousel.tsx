import { useRouter } from 'next/router';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@/entities/card';
import { Carousel } from '@/entities/carousel';
import { AddToFavoritesButton } from '@/features/add-movie-to-favorites/ui/add-to-favorites';
import { useFetchFilmSimilarQuery } from '@/shared/services';

export const SimilarCarousel: FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { data: similar } = useFetchFilmSimilarQuery(
    { id: Number(router.query?.id) },
    { skip: !router.query?.id }
  );

  if (!similar?.total) return <></>;
  return (
    <Carousel title={t('descriptions.similar') || ''} route={`/similar/${router.query?.id}`}>
      {similar.items.map((card, index) => (
        <Card key={index} card={card} buttons={<AddToFavoritesButton />} />
      ))}
    </Carousel>
  );
};
