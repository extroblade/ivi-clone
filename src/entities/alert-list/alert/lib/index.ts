import { useEffect } from 'react';

import { TIME_BEFORE_CLOSE, TIME_TO_CLOSE } from '@/entities/alert-list/model';
import { selectAlerts, setActiveAlerts } from '@/entities/alert-list/model/slice';
import { useAppDispatch, useAppSelector, useBooleanState } from '@/shared/hooks';

type ReturnType = {
  handleClose: () => void;
  isClosing: boolean;
};
export const useCloseAlert = (id: string): ReturnType => {
  const [isClosing, { handleOpen }] = useBooleanState();

  const { activeAlerts } = useAppSelector(selectAlerts);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    handleOpen();
    const newActiveAlerts = activeAlerts.filter((active) => active.id !== id);
    setTimeout(() => {
      dispatch(setActiveAlerts(newActiveAlerts));
    }, TIME_TO_CLOSE);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, TIME_BEFORE_CLOSE);
    return () => clearTimeout(timer);
  }, [activeAlerts.length]);
  return { handleClose, isClosing };
};
