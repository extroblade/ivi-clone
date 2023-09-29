import React from 'react';

import { Loader, Title } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { useFetchFilmVideoQuery } from '@/shared/services';
import { selectModal } from '@/shared/store';
import { Player } from '@/UI';

import styles from './trailers-tab.module.scss';

export const TrailersTab = () => {
  const { currentMovie, showWatchPageModal } = useAppSelector(selectModal);
  const { data: videos, isLoading } = useFetchFilmVideoQuery(
    { id: currentMovie?.kinopoiskId },
    { skip: !showWatchPageModal }
  );
  if (isLoading) return <Loader />;
  if (!videos?.total) return <Title>Видео не указаны</Title>;
  return (
    <>
      {videos?.items.map((video) => (
        <div key={video.name} className={styles.trailers}>
          <Title tag={'h3'}>{video.name}</Title>
          <Player url={video.url} />
        </div>
      ))}
    </>
  );
};
