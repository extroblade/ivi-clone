import React from 'react';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { Htag } from '@/components/Htag/Htag';
import Player from '@/components/Player/Player';

const TrailersTab = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const videos = currentMovie?.videos?.items;
  return (
    <div>
      {videos?.length ? (
        videos.map((video) => (
          <div key={video.name}>
            <Htag tag={'h3'}>{video.name}</Htag>
            <Player url={video.url || 'https://www.youtube.com/watch?v=ysz5S6PUM-U'} />
          </div>
        ))
      ) : (
        <Htag tag={'h2'}>Видео не указаны</Htag>
      )}
    </div>
  );
};

export default TrailersTab;
