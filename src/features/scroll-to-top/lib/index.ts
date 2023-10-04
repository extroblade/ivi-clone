import { useBrowser } from '@/shared/hooks/useBrowser';

export const useScrollTop = () => {
  const isBrowser = useBrowser();
  if (!isBrowser) {
    return;
  }
  const header: HTMLElement = document.getElementsByTagName('header')[0];
  if (!header) {
    return;
  }
  return () => header.scrollIntoView({ behavior: 'smooth' });
};
