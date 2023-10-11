import { FC, MouseEvent } from 'react';
import { FiUpload } from 'react-icons/fi';

import styles from '@/entities/player/ui/player.module.scss';
import { Button } from '@/newui';
import { AppearanceVariants } from '@/newui/button/button.props';

export const ShareButton: FC<{ appearance?: AppearanceVariants }> = ({
  appearance = 'transparent',
}) => {
  const handleShare = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <Button appearance={appearance} onClick={handleShare}>
      <FiUpload className={styles.icon} />
    </Button>
  );
};