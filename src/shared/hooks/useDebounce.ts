import { useEffect, useMemo } from 'react';

import { debounce } from '@/shared/helpers/debounce/debounce';
import { useEvent } from '@/shared/hooks/useEvent';

export function useDebounce<Fn extends (...args: unknown[]) => unknown>(fn: Fn, ms: number) {
  const memoizedFn = useEvent(fn);

  const debouncedFn = useMemo(
    () =>
      debounce((...args: Parameters<Fn>) => {
        memoizedFn(...args);
      }, ms),
    [ms]
  );

  useEffect(
    () => () => {
      debouncedFn.cancel();
    },
    [debouncedFn]
  );

  return debouncedFn;
}
