import crypto from 'crypto';

import { DEFAULT_ALERT_AMOUNT } from '@/shared/constants/alerts';
import { useAlertsStore } from '@/widgets/alerts/model/store';

export const useCreateAlert = (): (({
  title,
  extra,
}: {
  title?: string;
  extra?: string;
}) => void) => {
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
