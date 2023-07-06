import React from 'react';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { Htag } from '@/components/Htag/Htag';
import Player from '@/components/Player/Player';
import styles from '../WatchPageModal.module.scss';

const TrailersTab = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const videos = currentMovie?.videos?.items;
  return (
    <>
      {currentMovie?.videos?.total ? (
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

export default TrailersTab;
