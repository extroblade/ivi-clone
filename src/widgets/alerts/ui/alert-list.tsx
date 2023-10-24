import { DEFAULT_ALERT_AMOUNT } from '@/shared/constants/alerts';

import { Alert } from '../alert/ui/alert';
import { useAlertsStore } from '../model/store';
import styles from './alert-list.module.scss';

export const AlertList = () => {
  const alerts = useAlertsStore((state) => state.alerts);
  if (!alerts.length) return <></>;
  return (
    <div className={styles.alert_list}>
      {alerts.slice(0, DEFAULT_ALERT_AMOUNT).map((alert) => (
        <Alert alert={alert} key={alert.id} />
      ))}
    </div>
  );
};
