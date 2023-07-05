import { useEffect } from 'react';

export function usePreventScroll(openState) {
  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');

    if (openState) {
      wrapper.style.position = 'absolute';
      wrapper.style.overflow = 'hidden';
    } else {
      wrapper.removeAttribute('style');
    }
  }, [openState]);
}
