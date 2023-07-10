import React, { FC, useEffect, useState } from 'react';
import styles from './Explanations.module.scss';
import Image from 'next/image';
import { ExplanationsProps } from '@/UI/Explanations/Explanations.props';
import { iFactsItems } from '@/types/kinopoiskTypes';

const Explanations: FC<ExplanationsProps> = ({ facts }) => {
  const items = facts?.items.filter((item) => item.text).slice(0, 5);
  const length = items?.length || 0;
  const [active, setActive] = useState<number>(0);
  const [now, setNow] = useState<iFactsItems | null>(length ? items[0] : null);
  useEffect(() => {
    if (length) {
      setNow(() => items.find((item, index) => index == active));
    }
  }, [active]);

  const nextSlide = () => {
    if (active < length - 1) {
      setActive((val) => val + 1);
      return;
    } else {
      setActive(() => 0);
      return;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [active]);

  if (length < 1) return;
  return (
    <div className={styles.explanations} onClick={nextSlide}>
      <div className={styles.slider_container}>
        <div className={styles.slide}>
          <div className={styles.reasons}>
            <Image alt={'left_wing'} src={'/images/laurelBranchLeft.svg'} height={40} width={16} />
            <div className={styles.content_block}>
              <div className={styles.content}>{now?.text}</div>
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
        {items.map((item, index) => (
          <div
            className={`${styles.point} ${active == index ? styles.isActive : ''}`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Explanations;
