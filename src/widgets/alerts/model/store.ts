import { ReactNode } from 'react';
import { create } from 'zustand';

type AlertProps = {
  id: string;
  title?: ReactNode;
  extra?: ReactNode;
};
export const useAlertsStore = create<{
  alerts: AlertProps[];
  handleAlerts: (payload: AlertProps[]) => void;
}>((set) => ({
  alerts: [],
  handleAlerts: (payload: AlertProps[]) => set(() => ({ alerts: payload })),
}));
