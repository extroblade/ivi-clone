import cn from 'classnames';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';

import { useScrollTop } from '../lib';
import styles from './scroll-to-top.module.scss';

export const ScrollToTopButton = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const scrollTop = useScrollTop();
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.obs} ref={ref} />
      <div className={cn(styles.scroll_to_top, isInView && styles.shown)}>
        <Button size={'M'} onClick={scrollTop} appearance={'red'}>
          {t('buttons.continue-watching')}
        </Button>
      </div>
    </>
  );
};
