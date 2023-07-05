export const scrollTop = () => {
  const isBrowser = () => typeof window !== 'undefined';
  if (isBrowser()) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
