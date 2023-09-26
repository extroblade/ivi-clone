import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/shared/store';

import { AlertProps } from './index';

type InitialStateProps = {
  activeAlerts: AlertProps[];
};
const initialState: InitialStateProps = {
  activeAlerts: [],
};
export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setActiveAlerts(state, action: PayloadAction<AlertProps[]>) {
      state.activeAlerts = action.payload;
    },
  },
});

export const selectAlerts = (state: RootState) => state.alertsReducer;
export const { setActiveAlerts } = alertsSlice.actions;
export const alertsReducer = alertsSlice.reducer;
