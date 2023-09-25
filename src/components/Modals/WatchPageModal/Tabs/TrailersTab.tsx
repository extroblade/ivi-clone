import React from 'react';

import { Title } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { selectModal } from '@/shared/store';
import { Player } from '@/UI';

import styles from '../WatchPageModal.module.scss';

export const TrailersTab = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const videos = currentMovie?.videos?.items;
  return (
    <>
      {videos?.length && currentMovie?.videos?.total ? (
        videos.map((video) => (
          <div key={video.name} className={styles.trailers}>
            <Title tag={'h3'}>{video.name}</Title>
            <Player url={video.url} />
          </div>
        ))
      ) : (
        <Title tag={'h2'}>Видео не указаны</Title>
      )}
    </>
  );
};
