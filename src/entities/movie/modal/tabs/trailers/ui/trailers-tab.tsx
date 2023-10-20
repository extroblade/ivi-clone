import { useRouter } from 'next/router';

import { Player } from '@/entities/player';
import { useAppSelector } from '@/shared/hooks';
import { useFetchFilmVideoQuery } from '@/shared/services';
import { selectModal } from '@/shared/store';
import { Loader, Title } from '@/shared/ui';

import styles from './trailers-tab.module.scss';

export const TrailersTab = () => {
  const router = useRouter();
  const { showWatchPageModal } = useAppSelector(selectModal);
  const { data: videos, isLoading } = useFetchFilmVideoQuery(
    { id: Number(router.query?.id) || 0 },
    { skip: !showWatchPageModal || !router.query?.id }
  );
  if (isLoading) return <Loader />;
  if (!videos?.total) return <Title>Видео не указаны</Title>;
  return (
    <>
      {videos?.items.map(({ name, url }, index) => (
        <div key={index} className={styles.trailers}>
          <Title tag={'h3'}>{name}</Title>
          {url && <Player url={url} />}
        </div>
      ))}
    </>
  );
};
