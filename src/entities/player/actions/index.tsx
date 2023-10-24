import { useTranslation } from 'react-i18next';
import { IoPlayOutline } from 'react-icons/io5';

import styles from '@/entities/player/ui/player.module.scss';
import { useScrollTop } from '@/features/scroll-to-top/lib';
import { useAppDispatch } from '@/shared/hooks';
import { setCurrentTab, setShowWatchPageModal } from '@/shared/store';
import { Button } from '@/shared/ui';
import { AppearanceVariants } from '@/shared/ui/button/button.props';

export const OpenTrailersButton = ({
  appearance = 'transparent',
}: {
  appearance?: AppearanceVariants;
}) => {
  const { t } = useTranslation();
  const scrollTop = useScrollTop();

  const dispatch = useAppDispatch();
  const openTrailers = () => {
    dispatch(setShowWatchPageModal(true));
    dispatch(setCurrentTab(2));
    scrollTop?.();
  };
  return (
    <Button appearance={appearance} onClick={openTrailers}>
      <IoPlayOutline className={styles.icon} />
      {t('buttons.trailer')}
    </Button>
  );
};
