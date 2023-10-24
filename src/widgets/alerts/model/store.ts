import { ReactNode } from 'react';
import { create } from 'zustand';

type AlertProps = {
  id: string;
  title?: ReactNode;
  extra?: ReactNode;
};
type AlertStoreProps = {
  alerts: AlertProps[];
  handleAlerts: (payload: AlertProps[]) => void;
};
export const useAlertsStore = create<AlertStoreProps>((set) => ({
  alerts: [],
  handleAlerts: (payload: AlertProps[]) => set(() => ({ alerts: payload })),
}));
