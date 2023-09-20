import { useInView } from 'framer-motion';
import React, { useRef } from 'react';

import { Button } from '@/UI';

import styles from './ScrollToTopButton.module.scss';

export const ScrollToTopButton = () => {
  const isBrowser = () => typeof window !== 'undefined';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const scrollToTop = () => {
    if (!isBrowser()) {
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className={styles.obs} ref={ref} />
      <div className={`${styles.scroll_to_top} ${isInView ? styles.shown : ''}`}>
        <Button onClick={scrollToTop} appearance={'red'}>
          Продолжить просмотр
        </Button>
      </div>
    </>
  );
};
