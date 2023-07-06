import React, { FC } from 'react';
import styles from './Trailers.module.scss';
import { Htag } from '@/components/Htag/Htag';
import Sup from '@/components/Sup/Sup';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/store/reducers/modals.slice';
import { scrollTop } from '@/helpers/scrollTop';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useTranslation } from 'react-i18next';
import { iVideos } from '@/types/kinopoiskTypes';

interface iTrailers {
  videos: iVideos;
}

const Trailers: FC<iTrailers> = ({ videos }) => {
  const { t } = useTranslation();

  const { currentMovie } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const openTrailers = () => {
    dispatch(setCurrentMovie({ ...currentMovie, index: 2 }));
    dispatch(setShowWatchPageModal(true));
    scrollTop();
  };
  console.log(videos);
  return (
    <>
      <div className={styles.title} onClick={openTrailers}>
        <Htag tag={'h4'}>{t('categories.trailers')} </Htag> <Sup text={videos?.total || 0} />
      </div>
      {videos?.total
        ? videos?.items.map((video) => (
            <div key={video.url}>
              {video.url}
              {video.name}
            </div>
          ))
        : ''}
    </>
  );
};

export default Trailers;
