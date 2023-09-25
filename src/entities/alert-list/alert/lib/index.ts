import { useEffect, useState } from 'react';

import { TIME_BEFORE_CLOSE, TIME_TO_CLOSE } from '@/entities/alert-list/model';
import { selectAlerts, setActiveAlerts } from '@/entities/alert-list/model/slice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

export const useCloseAlert = (id: string) => {
  const [isClosing, setIsClosing] = useState(false);

  const { activeAlerts } = useAppSelector(selectAlerts);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setIsClosing(() => true);
    setTimeout(() => {
      dispatch(setActiveAlerts(activeAlerts.filter((active) => active.id !== id)));
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
