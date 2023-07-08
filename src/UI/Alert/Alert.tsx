import React, { FC, useEffect, useState } from 'react';
import styles from '@/UI/Alert/Alert.module.scss';
import { Button } from '@/UI/Button/Button';
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
  const [opening, setOpening] = useState(false);
  const dispatch = useAppDispatch();

  const { id, title, extra } = alert;

  useEffect(() => {
    if (id !== activeAlerts[0]?.id) return;
    const timer = setTimeout(() => {
      close();
    }, CLOSE_TIME);
    return () => clearTimeout(timer);
  }, [activeAlerts?.length]);

  useEffect(() => {
    if (id == activeAlerts[activeAlerts?.length - 1]?.id) {
      setOpening(() => true);
    } else {
      setOpening(() => false);
    }
  }, [activeAlerts?.length]);

  const close = () => {
    setClosing(() => true);
    setTimeout(() => {
      dispatch(setActiveAlerts(activeAlerts.filter((active) => active.id !== id)));
    }, 300);
  };

  return (
    <>
      {(title || extra) && (
        <div
          className={`${styles.alert} ${closing ? styles.closing : ''} ${
            opening ? styles.opening : ''
          }`}
        >
          <div className={styles.alert_wrapper}>
            <div className={styles.close} onClick={close}>
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
      )}
    </>
  );
};

export default React.memo(Alert);
