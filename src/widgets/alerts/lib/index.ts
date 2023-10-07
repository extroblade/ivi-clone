import { useEffect } from 'react';

import { useBooleanState } from '@/shared/hooks';
import { TIME_BEFORE_CLOSE, TIME_TO_CLOSE } from '@/widgets/alerts/model';
import { useAlertsStore } from '@/widgets/alerts/model/store';

type ReturnType = {
  handleClose: () => void;
  isClosing: boolean;
};
export const useCloseAlert = (id: string): ReturnType => {
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
