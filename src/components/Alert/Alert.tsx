import React, { FC, useEffect } from 'react';
import styles from './Alert.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectModal, setCurrentAlert } from '@/store/reducers/modals.slice';
import { Button } from '@/components/Button/Button';
import { CLOSE_TIME } from '@/constants/Constants';

const Alert: FC = () => {
  const { currentAlert } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentAlert?.length) {
        dispatch(setCurrentAlert(currentAlert.slice(1)));
      }
    }, CLOSE_TIME);
    return () => clearTimeout(timer);
  }, [currentAlert?.length]);

  const close = (index) => {
    dispatch(setCurrentAlert(currentAlert.filter((alert, alertIndex) => alertIndex !== index)));
  };

  return (
    <>
      {currentAlert?.length ? (
        <div className={styles.alerts}>
          {currentAlert.map(
            (alert, index) =>
              (alert?.title || alert?.extra) && (
                <div className={styles.alert} key={index}>
                  <div className={styles.alert_wrapper}>
                    <div className={styles.close} onClick={() => close(index)}>
                      <Button appearance={'gray'}>X</Button>
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
              )
          )}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Alert;
