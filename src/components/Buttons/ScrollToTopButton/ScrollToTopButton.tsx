import { useInView } from 'framer-motion';
import React, { useRef } from 'react';

import { scrollTop } from '@/helpers';
import { Button } from '@/UI';

import styles from './ScrollToTopButton.module.scss';

export const ScrollToTopButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <>
      <div className={styles.obs} ref={ref} />
      <div className={`${styles.scroll_to_top} ${isInView ? styles.shown : ''}`}>
        <Button onClick={scrollTop} appearance={'red'}>
          Продолжить просмотр
        </Button>
      </div>
    </>
  );
};
