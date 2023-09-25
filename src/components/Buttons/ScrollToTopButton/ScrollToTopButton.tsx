import { useInView } from 'framer-motion';
import React, { useRef } from 'react';

import { Button } from '@/newui';
import { scrollTop } from '@/shared/helpers';

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
