import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { createWrapper } from 'next-redux-wrapper';

import { alertsReducer } from '@/entities/alert-list/model/slice';
import { authModalReducer } from '@/features/auth-button/model/slice';
import { movieApi } from '@/shared/services/movie.api';
import { personApi } from '@/shared/services/person.api';

import { modalsReducer } from './reducers/modals.slice';

const rootReducer = combineReducers({
  modalsReducer,
  alertsReducer,
  authModalReducer,
  [movieApi.reducerPath]: movieApi.reducer,
  [personApi.reducerPath]: personApi.reducer,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware).concat(personApi.middleware),
  });
}

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<RootStore>(makeStore);

setupListeners(store.dispatch);
export * from './reducers/modals.slice';
export * from '@/entities/alert-list/model/slice';
