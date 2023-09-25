import { useEffect } from 'react';

export function usePreventScroll(openState: boolean): void {
  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    if (!wrapper) {
      return;
    }
    if (openState) {
      wrapper.classList.add('locked');
    } else {
      wrapper.classList.remove('locked');
    }
  }, [openState]);
}
