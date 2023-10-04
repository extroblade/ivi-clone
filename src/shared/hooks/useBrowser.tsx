import { useEffect } from 'react';

import { useBooleanState } from '@/shared/hooks/useBooleanState';

export const useBrowser = () => {
  const [isWindow, { handleOpen }] = useBooleanState();
  useEffect(() => {
    if (typeof window == 'undefined') {
      return;
    }
    handleOpen();
  }, []);
  return isWindow;
};
