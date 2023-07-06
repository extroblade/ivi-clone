import React, { FC } from 'react';
import styles from './Trailers.module.scss';
import { Htag } from '@/components/Htag/Htag';
import Sup from '@/components/Sup/Sup';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/store/reducers/modals.slice';
import { scrollTop } from '@/helpers/scrollTop';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useTranslation } from 'react-i18next';
import { iVideos } from '@/types/kinopoiskTypes';
import Link from 'next/link';
import { P } from '@/components/P/P';

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
  return (
    <div className={styles.videos}>
      <div className={styles.title} onClick={openTrailers}>
        <Htag tag={'h4'}>{t('categories.trailers')} </Htag> <Sup text={videos?.total || 0} />
      </div>
      <div className={styles.videos_links}>
        {videos?.total
          ? videos?.items.map((video) => (
              <div className={styles.text_container} key={video.url}>
                <Link href={video.url}>
                  <P size={'L'} color={'gray-light'}>
                    {video.name}
                  </P>
                </Link>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

export default Trailers;
