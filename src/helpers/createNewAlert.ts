import { MAX_ALERT_AMOUNT } from '@/constants';
import { iAlert } from '@/store';

export const createNewAlert = (
  title: string,
  extra: string | undefined,
  activeAlerts: iAlert[] | undefined
): iAlert[] => {
  const newId = self?.crypto?.randomUUID ? self.crypto.randomUUID() : '123';
  const currentAlerts = [];

  const newAlert = {
    id: newId,
    title: title,
    extra: extra,
  };
  if (activeAlerts?.length && !activeAlerts?.find((alert) => alert.id == newAlert.id)) {
    currentAlerts.push(...activeAlerts, newAlert);
  } else {
    currentAlerts.push(newAlert);
  }
  return currentAlerts.slice(-(MAX_ALERT_AMOUNT * 2));
};
