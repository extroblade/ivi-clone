import React, { FC } from 'react';
import styles from './Alert.module.scss';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { MAX_ALERT_AMOUNT } from '@/constants/Constants';
import Alert from '@/components/Alert/Alert';

const AlertsList: FC = () => {
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

export default AlertsList;
