import { useEffect, useState } from 'react';

import { selectAlerts, setActiveAlerts } from '@/features/alert-list/alert/model/slice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

import { TIME_BEFORE_CLOSE, TIME_TO_CLOSE } from '../model';

export const useAlert = (id?: string) => {
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
  return { alerts: activeAlerts, handleClose, isClosing };
};
