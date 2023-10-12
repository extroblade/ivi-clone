import cn from 'classnames';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';

import { OpenTrailersButton } from '@/entities/player/actions';
import { PlayerProps } from '@/entities/player/props/props';
import { AddToFavoritesButton } from '@/features/add-movie-to-favorites/ui/add-to-favorites';
import { ShareButton } from '@/features/share-button/ui/share-button';
import { TurnNotificationsButton } from '@/features/turn-notifications/ui/turn-notifications';
import { Text } from '@/newui';
import { useBrowser } from '@/shared/hooks/useBrowser';
import { useFetchFilmVideoQuery } from '@/shared/services';

import styles from './player.module.scss';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: true });

export const Player: FC<PlayerProps> = ({ url, actions }) => {
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
      {actions && (
        <div className={styles.actions}>
          <OpenTrailersButton appearance={'rectangle'} />
          <AddToFavoritesButton appearance={'rectangle'} />
          <TurnNotificationsButton appearance={'rectangle'} />
          <ShareButton appearance={'rectangle'} />
        </div>
      )}
    </div>
  );
};
