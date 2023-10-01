import cn from 'classnames';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';

import { ExplanationsProps } from '@/entities/explanations/model/props';
import { Loader } from '@/newui';
import { useFetchFilmFactsQuery } from '@/shared/services';
import { iFactsItems } from '@/shared/types/kinopoiskTypes';

import styles from './explanations.module.scss';

export const Explanations: FC<ExplanationsProps> = ({ factsId }) => {
  const { data: facts, isLoading, error } = useFetchFilmFactsQuery({ id: factsId });

  const items = facts?.items.filter((item) => item.text).slice(0, 5);
  const [active, setActive] = useState<number>(0);
  const [now, setNow] = useState<iFactsItems | null>(null);

  const nextSlide = () => {
    if (active < (items?.length || 0) - 1) {
      setActive((val) => val + 1);
      return;
    } else {
      setActive(() => 0);
      return;
    }
  };

  useEffect(() => {
    if (!facts?.total) {
      return;
    }
    setNow(() => (items ? items[0] : null));
  }, [facts]);

  useEffect(() => {
    if ((items?.length || 0) > 1) {
      setNow(() => items?.find((_, index) => index == active) || null);
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [active]);
  if (isLoading) return <Loader />;
  if (error || !items?.length) return <></>;
  return (
    <div className={styles.explanations} onClick={nextSlide}>
      <div className={styles.slider_container}>
        <div className={styles.slide}>
          <div className={styles.reasons}>
            <Image alt={'left_wing'} src={'/images/laurelBranchLeft.svg'} height={40} width={16} />
            <div className={styles.content_block}>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: now?.text || '' }}
              />
            </div>
            <Image
              alt={'right_wing'}
              src={'/images/laurelBranchRight.svg'}
              height={40}
              width={16}
            />
          </div>
        </div>
      </div>
      <div className={styles.point_container}>
        {items?.map((_, index) => (
          <div className={cn(styles.point, active == index && styles.isActive)} key={index} />
        ))}
      </div>
    </div>
  );
};
