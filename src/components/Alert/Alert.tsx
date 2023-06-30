import React, { FC, useEffect, useState } from 'react';
import styles from '@/components/Alert/Alert.module.scss';
import { Button } from '@/components/Button/Button';
import { RxCross2 } from 'react-icons/rx';
import { iAlert, selectModal, setActiveAlerts } from '@/store/reducers/modals.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { CLOSE_TIME } from '@/constants/Constants';

interface IAlert {
  alert: iAlert;
}

const Alert: FC<IAlert> = ({ alert }) => {
  const { activeAlerts } = useAppSelector(selectModal);
  const [closing, setClosing] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      close();
    }, CLOSE_TIME);
    return () => clearTimeout(timer);
  }, [activeAlerts?.length]);

  const close = () => {
    setClosing(() => true);
    setTimeout(() => {
      dispatch(setActiveAlerts(activeAlerts.filter((active) => active.id !== alert.id)));
    }, 300);
  };

  return (
    <>
      {(alert?.title || alert?.extra) && (
        <div className={`${styles.alert} ${closing ? styles.closing : ''}`}>
          <div className={styles.alert_wrapper}>
            <div className={styles.close} onClick={close}>
              <Button appearance={'gray'}>
                <RxCross2 />
              </Button>
            </div>
            <div className={styles.alert_textBlock}>
              {alert.title && <div className={styles.alert_title}>{alert.title}</div>}
              {alert.extra && (
                <div className={styles.alert_extra}>
                  <div className={styles.alert_extraPrimary}>{alert.extra}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
