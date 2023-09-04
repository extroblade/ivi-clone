export function debounce<T extends (...args: any[]) => any>(fn: T, ms: number) {
  let timeoutId: number | null = null;

  function debounced(...args: Parameters<T>) {
    if (typeof timeoutId === 'number') {
      clearTimeout(timeoutId);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    timeoutId = setTimeout(() => {
      timeoutId = null;
      // eslint-disable-next-line prefer-spread
      fn.apply(null, args);
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
