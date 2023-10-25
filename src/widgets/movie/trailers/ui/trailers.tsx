import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { useScrollTop } from '@/features/scroll-to-top/lib';
import { useAppDispatch } from '@/shared/hooks';
import { useFetchFilmVideoQuery } from '@/shared/services';
import { setCurrentTab, setShowWatchPageModal } from '@/shared/store';
import { Text, Title } from '@/shared/ui';

import styles from './trailers.module.scss';

export const Trailers = () => {
  const router = useRouter();
  const { data: trailers } = useFetchFilmVideoQuery(
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
  if (!trailers?.total) return <></>;
  return (
    <>
      <Title className={styles.title} onClick={openTrailers}>
        {t('categories.trailers')}
      </Title>
      <div className={styles.links}>
        {trailers?.items.map(({ name, url }, index) => (
          <Link key={index} target={'_blank'} href={url}>
            <Text className={styles.name}>{name}</Text>
          </Link>
        ))}
      </div>
    </>
  );
};
