import { useEffect } from 'react';

export function usePreventScroll(openState) {
  useEffect(() => {
    const el = document.querySelector('html');

    if (openState) {
      //document.getElementsByClassName('wrapper')[0].style.position = 'fixed';
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      el.style.overflow = 'hidden';
    } else {
      // document.getElementsByClassName('wrapper')[0].removeAttribute('style');
      document.body.removeAttribute('style');
      el.removeAttribute('style');
    }
  }, [openState]);
}
