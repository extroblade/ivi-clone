export const scrollTop = (): void => {
  const isBrowser = (): boolean => typeof window !== 'undefined';
  if (isBrowser()) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
