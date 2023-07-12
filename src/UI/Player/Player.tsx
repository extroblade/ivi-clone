import styles from './Player.module.scss';
import dynamic from 'next/dynamic';
import { FC, useEffect, useState } from 'react';
import { PlayerProps } from './Player.props';
import { Button } from '../Button/Button';
import { IoPlayOutline } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import AddToFavoritesButton from '@/components/Buttons/CardButtons/AddToFavoritesButton';
import TurnNotificationsButton from '@/components/Buttons/CardButtons/TurnNotificationsButton';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/store/reducers/modals.slice';
import { scrollTop } from '@/helpers/scrollTop';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: true });

const Player: FC<PlayerProps> = ({ url, actions }) => {
  const { t } = useTranslation();
  const { currentMovie } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  const openTrailers = () => {
    dispatch(setShowWatchPageModal(true));
    dispatch(setCurrentMovie({ ...currentMovie, index: 2 }));
    scrollTop();
  };

  if (!url) return <div className={`${styles.placeholder} loader`} />;

  return (
    <div className={styles.container}>
      <div className={styles.player}>
        <div className={styles.player__container}>
          {hasWindow && (
            <ReactPlayer
              width="100%"
              height="100%"
              className={styles.video}
              controls={true}
              light={true}
              url={url}
              playing={true}
            />
          )}
        </div>
        {actions && (
          <div className={styles.actions}>
            <Button appearance="rectangle" onClick={openTrailers}>
              <IoPlayOutline className={styles.icon} />
              {t('buttons.trailer')}
            </Button>
            <AddToFavoritesButton />
            {currentMovie?.type == 'SERIES' && <TurnNotificationsButton />}
            <Button appearance="square">
              <FiUpload className={styles.icon} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Player;
