import Image from 'next/image';
import React from 'react';

import { Loader, Text, Title } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { useFetchFilmAwardsQuery } from '@/shared/services';
import { selectModal } from '@/shared/store';

import styles from './awards-tab.module.scss';

export const AwardsTab = () => {
  const { currentMovie, showWatchPageModal } = useAppSelector(selectModal);
  const { data: awards, isLoading } = useFetchFilmAwardsQuery(
    { id: currentMovie?.kinopoiskId },
    { skip: !showWatchPageModal }
  );
  if (isLoading) return <Loader />;
  if (!awards?.total) return <Title>Награды не указаны</Title>;
  return (
    <>
      {awards.items.map((award) => (
        <div key={award.name}>
          <div className={styles.award}>
            <Text size={'L'} color={'white'}>
              {award.name} -&nbsp;
            </Text>
            <Text>{award.nominationName}</Text>
          </div>

          <div className={styles.image_container}>
            {award?.imageUrl && <Image src={award.imageUrl} fill alt={award?.name} />}
          </div>
        </div>
      ))}
    </>
  );
};
