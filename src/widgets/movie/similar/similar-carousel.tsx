import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { AddToFavoritesButton } from 'src/features/buttons/add-movie-to-favorites';

import { Card } from '@/entities/card';
import { Carousel } from '@/entities/carousel';
import { useFetchFilmSimilarQuery } from '@/shared/services';

export const SimilarCarousel = () => {
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
