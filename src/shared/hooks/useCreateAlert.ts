import crypto from 'crypto';

import { AlertProps, DEFAULT_ALERT_AMOUNT } from '@/widgets/alerts/model';
import { useAlertsStore } from '@/widgets/alerts/model/store';

type ReturnType = ({ title, extra }: Omit<AlertProps, 'id'>) => void;

export const useCreateAlert = (): ReturnType => {
  const { alerts, handleAlerts } = useAlertsStore();
  const newAlertId = crypto?.randomUUID ? crypto.randomUUID() : Math.random().toString(36);

  return ({ title, extra }) => {
    const newAlert = {
      id: newAlertId,
      title,
      extra,
    };
    handleAlerts([...alerts, newAlert].slice(-DEFAULT_ALERT_AMOUNT * 2) || []);
  };
};
