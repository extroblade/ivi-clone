interface iAlert {
  title?: string;
  extra?: string;
}

export const createNewAlert = (
  title: string | undefined,
  extra: string | undefined,
  activeAlerts: iAlert[] | undefined
) => {
  const newId = self.crypto.randomUUID(); //
  const currentAlerts = [];

  const newAlert = {
    id: newId,
    title: title || null,
    extra: extra || null,
  };
  if (activeAlerts?.length && !activeAlerts?.find((alert) => alert.id == newAlert.id)) {
    currentAlerts.push(...activeAlerts, newAlert);
  } else {
    currentAlerts.push(newAlert);
  }
  return currentAlerts;
};
