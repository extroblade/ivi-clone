export const useScrollTop = () => {
  const isBrowser = typeof window !== 'undefined';
  if (!isBrowser) {
    return;
  }
  const header: HTMLElement = document.getElementsByTagName('header')[0];
  if (!header) {
    return;
  }
  return () => header.scrollIntoView({ behavior: 'smooth' });
};
