import React, { FC } from 'react';

import { MAX_ALERT_AMOUNT } from '@/constants';
import { useAppSelector } from '@/hooks';
import { selectModal } from '@/store';
import { Alert } from '@/UI';

import styles from './Alert.module.scss';

export const AlertsList: FC = () => {
  const { activeAlerts } = useAppSelector(selectModal);

  return (
    <>
      {activeAlerts?.length ? (
        <div className={styles.alerts}>
          {activeAlerts.slice(0, MAX_ALERT_AMOUNT).map((alert) => (
            <Alert alert={alert} key={alert.id} />
          ))}
        </div>
      ) : (
        ''
      )}
    </>
  );
};
