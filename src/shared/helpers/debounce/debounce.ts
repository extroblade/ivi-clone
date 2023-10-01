import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

export function debounce<T extends (...args: any[]) => any>(fn: T, ms: number) {
  let timeoutId: number | TimeoutId | null = null;

  function debounced(...args: Parameters<T>) {
    if (typeof timeoutId === 'number') {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn(...args);
    }, ms);
  }

  debounced.cancel = () => {
    if (typeof timeoutId !== 'number') {
      return;
    }
    clearTimeout(timeoutId);
  };

  return debounced;
}
