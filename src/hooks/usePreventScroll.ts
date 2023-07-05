import { useEffect } from 'react';

export function usePreventScroll(openState) {
  useEffect(() => {
    const el = document.querySelector('.wrapper');

    if (openState) {
      el.style.position = 'absolute';
      el.style.overflow = 'hidden';
    } else {
      el.style.position = 'static';
      el.style.overflow = 'inherit';
    }
  }, [openState]);
}
