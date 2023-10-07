import { ReactNode } from 'react';

export const DEFAULT_ALERT_AMOUNT = 4;
export const TIME_BEFORE_CLOSE = 2000;
export const TIME_TO_CLOSE = 300;

export type AlertProps = {
  id: string;
  title?: ReactNode;
  extra?: ReactNode;
};
