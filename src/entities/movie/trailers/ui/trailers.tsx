import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useScrollTop } from '@/features/scroll-to-top/lib';
import { Text, Title } from '@/newui';
import { useAppDispatch } from '@/shared/hooks';
import { useFetchFilmVideoQuery } from '@/shared/services';
import { setCurrentTab, setShowWatchPageModal } from '@/shared/store';

import styles from './trailers.module.scss';

export const Trailers: FC = () => {
  const router = useRouter();
  const { data: videos } = useFetchFilmVideoQuery(
    { id: Number(router.query?.id) },
    { skip: !router.query?.id }
  );

  const { t } = useTranslation();
  const scrollTop = useScrollTop();
  const dispatch = useAppDispatch();
  const openTrailers = () => {
    dispatch(setCurrentTab(2));

    dispatch(setShowWatchPageModal(true));
    scrollTop?.();
  };
  if (!videos?.total) return <></>;
  return (
    <div className={styles.videos}>
      <Title onClick={openTrailers}>{t('categories.trailers')}</Title>
      <div className={styles.videos_links}>
        {videos?.items.map(({ name, url }, index) => (
          <div className={styles.text_container} key={index}>
            <Link target={'_blank'} href={url}>
              <Text size={'L'} color={'gray-light'}>
                {name}
              </Text>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
