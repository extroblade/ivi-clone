import React from 'react';

import { useAppSelector } from '@/shared/hooks';
import { selectModal } from '@/shared/store';
import { Htag, Player } from '@/UI';

import styles from '../WatchPageModal.module.scss';

export const TrailersTab = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const videos = currentMovie?.videos?.items;
  return (
    <>
      {videos?.length && currentMovie?.videos?.total ? (
        videos.map((video) => (
          <div key={video.name} className={styles.trailers}>
            <Htag tag={'h3'}>{video.name}</Htag>
            <Player url={video.url} />
          </div>
        ))
      ) : (
        <Htag tag={'h2'}>Видео не указаны</Htag>
      )}
    </>
  );
};
