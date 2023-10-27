import Image from 'next/image';
import { useRouter } from 'next/router';

import { useAppSelector } from '@/shared/hooks';
import { useFetchFilmAwardsQuery } from '@/shared/services';
import { selectModal } from '@/shared/store';
import { Loader, Text, Title } from '@/shared/ui';

import styles from './awards-tab.module.scss';

export const AwardsTab = () => {
  const { showWatchPageModal } = useAppSelector(selectModal);
  const router = useRouter();
  const { data: awards, isLoading } = useFetchFilmAwardsQuery(
    { id: Number(router.query?.id) || 0 },
    { skip: !showWatchPageModal || !router.query?.id }
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
