import { useEffect } from 'react';

import { useBooleanState } from '@/shared/hooks';
import { useAlertsStore } from '@/widgets/alerts/model/store';

const TIME_BEFORE_CLOSE = 2000;
const TIME_TO_CLOSE = 300;

export const useCloseAlert = (
  id: string
): {
  handleClose: () => void;
  isClosing: boolean;
} => {
  const [isClosing, { handleOpen }] = useBooleanState();

  const { alerts, handleAlerts } = useAlertsStore();

  const handleClose = () => {
    handleOpen();
    const newActiveAlerts = alerts.filter((active) => active.id !== id);
    setTimeout(() => {
      handleAlerts(newActiveAlerts);
    }, TIME_TO_CLOSE);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, TIME_BEFORE_CLOSE);
    return () => clearTimeout(timer);
  }, [alerts.length]);
  return { handleClose, isClosing };
};
