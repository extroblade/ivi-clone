import crypto from 'crypto';

import { AlertProps, DEFAULT_ALERT_AMOUNT } from '@/entities/alert-list/model';
import { selectAlerts, setActiveAlerts } from '@/entities/alert-list/model/slice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

type ReturnType = ({ title, extra }: Omit<AlertProps, 'id'>) => void;

export const useCreateAlert = (): ReturnType => {
  const dispatch = useAppDispatch();
  const { activeAlerts } = useAppSelector(selectAlerts);
  const newAlertId = crypto?.randomUUID ? crypto.randomUUID() : Math.random().toString(36);

  return ({ title, extra }) => {
    const newAlert = {
      id: newAlertId,
      title,
      extra,
    };
    dispatch(setActiveAlerts([...activeAlerts, newAlert].slice(-DEFAULT_ALERT_AMOUNT) || []));
  };
};
