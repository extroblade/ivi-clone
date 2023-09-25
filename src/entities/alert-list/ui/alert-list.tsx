import { selectAlerts } from '@/entities/alert-list/model/slice';
import { useAppSelector } from '@/shared/hooks';

import { Alert } from '../alert/ui/alert';
import { DEFAULT_ALERT_AMOUNT } from '../model';
import styles from './alert-list.module.scss';

export const AlertList = () => {
  const { activeAlerts } = useAppSelector(selectAlerts);
  if (!activeAlerts.length) return <></>;
  return (
    <div className={styles.alert_list}>
      {activeAlerts.slice(0, DEFAULT_ALERT_AMOUNT).map((alert) => (
        <Alert alert={alert} key={alert.id} />
      ))}
    </div>
  );
};
