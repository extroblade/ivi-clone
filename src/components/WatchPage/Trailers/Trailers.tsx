import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { scrollTop } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/shared/store';
import { iVideos } from '@/shared/types/kinopoiskTypes';
import { P, Title } from '@/UI';

import styles from './Trailers.module.scss';

interface iTrailers {
  videos?: iVideos;
}

export const Trailers: FC<iTrailers> = ({ videos }) => {
  const { t } = useTranslation();

  const { currentMovie } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const openTrailers = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
