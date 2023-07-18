import React, { FC } from 'react';
import styles from './Trailers.module.scss';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/store/reducers/modals.slice';
import { scrollTop } from '@/helpers/scrollTop';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useTranslation } from 'react-i18next';
import { iVideos } from '@/types/kinopoiskTypes';
import Link from 'next/link';
import { P } from '@/UI/P/P';
import Title from '@/UI/Title/Title';

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
  //todo!!!
  return (
    <div className={styles.videos}>
      <Title text={t('categories.trailers')} sup={videos?.total || 0} onClick={openTrailers} />
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
