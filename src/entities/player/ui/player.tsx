import cn from 'classnames';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ReactNode, useMemo } from 'react';

import { useBrowser } from '@/shared/hooks/useBrowser';
import { useFetchFilmVideoQuery } from '@/shared/services';
import { Text } from '@/shared/ui';

import styles from './player.module.scss';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: true });

export const Player = ({ url, actions }: { url?: string; actions?: ReactNode }) => {
  const router = useRouter();
  const { data: videos, isLoading } = useFetchFilmVideoQuery(
    { id: Number(router.query?.id) },
    { skip: !router.query?.id }
  );

  const trailerYT = useMemo(() => {
    return videos?.items.find((video) => video.site == 'YOUTUBE')?.url;
  }, [videos?.items, isLoading]);

  const isBrowser = useBrowser();

  if (isLoading || !isBrowser) return <div className={cn(styles.not_found, 'loader')} />;
  if (!isLoading && !trailerYT && !url)
    return (
      <div className={styles.container}>
        <div className={styles.not_found}>
          <Text>Trailer not found</Text>
        </div>
      </div>
    );
  return (
    <div className={styles.container}>
      <div className={styles.player}>
        <div className={styles.player__container}>
          <ReactPlayer
            width="100%"
            height="100%"
            className={styles.video}
            controls={true}
            light={true}
            url={url || trailerYT}
            playing={true}
          />
        </div>
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
};
