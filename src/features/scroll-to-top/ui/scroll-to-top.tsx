import cn from 'classnames';
import { useInView } from 'framer-motion';
import React, { useRef } from 'react';

import { useScrollTop } from '@/features/scroll-to-top/lib';
import { Button } from '@/newui';

import styles from './scroll-to-top.module.scss';

export const ScrollToTopButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const scrollToTop = useScrollTop();
  return (
    <>
      <div className={styles.obs} ref={ref} />
      <div className={cn(styles.scroll_to_top, isInView && styles.shown)}>
        <Button onClick={scrollToTop} appearance={'red'}>
          Продолжить просмотр
        </Button>
      </div>
    </>
  );
};
