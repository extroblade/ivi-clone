import { useAlert } from '@/features/alert-list/alert/lib';

import { DEFAULT_ALERT_AMOUNT } from '../alert/model';
import { Alert } from '../alert/ui/alert';
import styles from './alert-list.module.scss';

export const AlertList = () => {
  const { alerts: activeAlerts } = useAlert();
  if (!activeAlerts.length) return <></>;
  return (
    <div className={styles.alert_list}>
      {activeAlerts.slice(0, DEFAULT_ALERT_AMOUNT).map((alert) => (
        <Alert alert={alert} key={alert.id} />
      ))}
    </div>
  );
};
