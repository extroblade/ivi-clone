import React, { useRef } from 'react';
import styles from './ScrollToTopButton.module.scss';
import { Button } from '@/UI/Button/Button';
import { useInView } from 'framer-motion';

const ScrollToTopButton = () => {
  const isBrowser = () => typeof window !== 'undefined';
  const ref = useRef(null);
  const isInView = useInView(ref);

  const scrollToTop = () => {
    if (isBrowser()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

export default ScrollToTopButton;
