import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { TrailerProps } from '@/entities/movie/trailers/model/props';
import { useScrollTop } from '@/features/scroll-to-top/lib';
import { Text, Title } from '@/newui';
import { useAppDispatch } from '@/shared/hooks';
import { setCurrentTab, setShowWatchPageModal } from '@/shared/store';

import styles from './trailers.module.scss';

export const Trailers: FC<TrailerProps> = ({ videos }) => {
  const { t } = useTranslation();
  const scrollTop = useScrollTop();
  const dispatch = useAppDispatch();
  const openTrailers = () => {
    dispatch(setCurrentTab(2));

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
                <Link target={'_blank'} href={video.url}>
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
