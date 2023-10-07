import cn from 'classnames';
import { FC, memo } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useCloseAlert } from 'src/widgets/alerts/lib';

import { Button } from '@/newui';
import { AlertProps } from '@/widgets/alerts/model';

import styles from './alert.module.scss';

export const Alert: FC<{ alert: AlertProps }> = memo(({ alert: { id, title, extra } }) => {
  const { handleClose, isClosing } = useCloseAlert(id);

  if (!title && !extra) return <></>;

  return (
    <div className={cn(styles.alert, isClosing && styles.closing)}>
      <div className={styles.alert_wrapper}>
        <div className={styles.close} onClick={handleClose}>
          <Button appearance={'gray'}>
            <RxCross2 />
          </Button>
        </div>
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
});
