import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useScrollTop } from '@/features/scroll-to-top/lib';
import { Text, Title } from '@/newui';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/shared/store';
import { iVideos } from '@/shared/types/kinopoiskTypes';

import styles from './Trailers.module.scss';

interface iTrailers {
  videos?: iVideos;
}

export const Trailers: FC<iTrailers> = ({ videos }) => {
  const { t } = useTranslation();
  const scrollTop = useScrollTop();
  const { currentMovie } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const openTrailers = () => {
    dispatch(setCurrentMovie({ ...currentMovie, index: 2 }));

    dispatch(setShowWatchPageModal(true));
    scrollTop?.();
  };
  return (
    <div className={styles.videos}>
      <Title onClick={openTrailers}>{t('categories.trailers')}</Title>
      <div className={styles.videos_links}>
        {videos?.total
          ? videos?.items.map((video) => (
              <div className={styles.text_container} key={video.url}>
                <Link href={video.url}>
                  <Text size={'L'} color={'gray-light'}>
                    {video.name}
                  </Text>
                </Link>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};
