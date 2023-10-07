import { create } from 'zustand';

import { AlertProps } from '@/widgets/alerts/model/index';

type AlertStoreProps = {
  alerts: AlertProps[];
  handleAlerts: (payload: AlertProps[]) => void;
};
export const useAlertsStore = create<AlertStoreProps>((set) => ({
  alerts: [],
  handleAlerts: (payload: AlertProps[]) => set(() => ({ alerts: payload })),
}));
