import Image from 'next/image';

import { Loader, Text, Title } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { useFetchFilmAwardsQuery } from '@/shared/services';
import { selectModal } from '@/shared/store';

import styles from './awards-tab.module.scss';

export const AwardsTab = () => {
  const { currentMovie, showWatchPageModal } = useAppSelector(selectModal);
  const { data: awards, isLoading } = useFetchFilmAwardsQuery(
    { id: currentMovie?.kinopoiskId || 0 },
    { skip: !showWatchPageModal || !currentMovie?.kinopoiskId }
  );
  if (isLoading) return <Loader />;
  if (!awards?.total) return <Title>Награды не указаны</Title>;
  return (
    <div className={styles.awards}>
      {awards.items.map(({ name, imageUrl, nominationName }, index) => (
        <div className={styles.award} key={index}>
          <Text>
            {name} - {nominationName}
          </Text>

          <div className={styles.image_container}>
            {imageUrl && <Image src={imageUrl} fill alt={name} />}
          </div>
        </div>
      ))}
    </div>
  );
};
