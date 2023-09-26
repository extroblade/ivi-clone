import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AlertProps } from '@/entities/alert-list/model/index';
import { RootState } from '@/shared/store';

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
