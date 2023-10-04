import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FiUpload } from 'react-icons/fi';
import { IoPlayOutline } from 'react-icons/io5';

import { AddToFavoritesButton, TurnNotificationsButton } from '@/entities/card/buttons';
import { PlayerProps } from '@/entities/player/props/props';
import { useScrollTop } from '@/features/scroll-to-top/lib';
import { Button } from '@/newui';
import { useAppDispatch } from '@/shared/hooks';
import { useBrowser } from '@/shared/hooks/useBrowser';
import { setCurrentTab, setShowWatchPageModal } from '@/shared/store';

import styles from './player.module.scss';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: true });

export const Player: FC<PlayerProps> = ({ url, actions }) => {
  const scrollTop = useScrollTop();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isBrowser = useBrowser();
  const openTrailers = () => {
    dispatch(setShowWatchPageModal(true));
    dispatch(setCurrentTab(2));
    scrollTop?.();
  };

  if (!url || !isBrowser) return <div className={`${styles.placeholder} loader`} />;

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
            url={url}
            playing={true}
          />
        </div>
        {actions && (
          <div className={styles.actions}>
            <Button appearance="rectangle" onClick={openTrailers}>
              <IoPlayOutline className={styles.icon} />
              {t('buttons.trailer')}
            </Button>
            <AddToFavoritesButton appearance={'square'} />
            <TurnNotificationsButton />
            <Button appearance="square">
              <FiUpload className={styles.icon} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
