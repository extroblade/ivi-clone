import cn from 'classnames';
import { memo, ReactNode } from 'react';
import { RxCross2 } from 'react-icons/rx';

import { Button } from '@/shared/ui';
import { useCloseAlert } from '@/widgets/alerts/lib';

import styles from './alert.module.scss';

export const Alert = memo(
  ({
    alert: { id, title, extra },
  }: {
    alert: {
      id: string;
      title?: ReactNode;
      extra?: ReactNode;
    };
  }) => {
    const { handleClose, isClosing } = useCloseAlert(id);
    if (!title && !extra) return <></>;

    return (
      <div className={cn(styles.alert, isClosing && styles.closing)}>
        <div className={styles.alert_wrapper}>
          <Button appearance={'transparent'} className={styles.close} onClick={handleClose}>
            <RxCross2 />
          </Button>
          <div className={styles.alert_textBlock}>
            {title && <div className={styles.alert_title}>{title}</div>}
            {extra && (
              <div className={styles.alert_extra}>
                <div className={styles.alert_extraPrimary}>{extra}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);
