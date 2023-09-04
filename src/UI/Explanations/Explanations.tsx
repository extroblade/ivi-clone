import React, { FC, useEffect, useState } from 'react';
import styles from './Explanations.module.scss';
import Image from 'next/image';
import { ExplanationsProps } from '@/UI/Explanations/Explanations.props';
import { iFactsItems } from '@/types/kinopoiskTypes';
import Loader from '@/UI/Loader/Loader';
import { useFetchFilmFactsQuery } from '@/services/movie.api';

const Explanations: FC<ExplanationsProps> = ({ factsId }) => {
  const { data: facts, isLoading, error } = useFetchFilmFactsQuery({ id: factsId });

  const items = facts?.items.filter((item) => item.text).slice(0, 5);
  const length = items?.length || 0;
  const [active, setActive] = useState<number>(0);
  const [now, setNow] = useState<iFactsItems | null>(null);

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
    if (facts?.total) {
      setNow(() => (items ? items[0] : null));
    }
  }, [facts]);

  useEffect(() => {
    if (length > 1) {
      setNow(() => (items && items.find((item, index) => index == active)) || null);
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [active]);
  if (isLoading) return <Loader />;
  if (error || length < 1) return <></>;
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
        {items &&
          items.length &&
          items.map((item, index) => (
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
