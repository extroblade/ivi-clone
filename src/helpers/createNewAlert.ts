import { iAlert } from '@/store/reducers/modals.slice';

export const createNewAlert = (
  title: string,
  extra: string | undefined,
  activeAlerts: iAlert[] | undefined
): iAlert[] => {
  const newId = self.crypto.randomUUID(); //
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
  return currentAlerts;
};
