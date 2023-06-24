import React from 'react';
import styles from '@/components/Modals/WatchPageModal/WatchPageModal.module.scss';
import Image from 'next/image';
import BarGraph from '@/components/BarGraph/BarGraph';
import { P } from '@/components/P/P';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';

const WatchModalInfoCard = () => {
  const { personModalItem } = useAppSelector(selectModal);
  const { card_image, year, country, countries, genres, duration } = personModalItem;

  return (
    <div className={styles.movie}>
      <Image
        width={128}
        height={196}
        onClick={() => close()}
        className={styles.movie__img}
        src={card_image}
        alt=""
      />
      <div className={styles.movie__info}>
        <div className={styles.graphs}>
          <span>9,1</span>
          <div className={styles.graphs__wrap}>
            <BarGraph width={80} />
            <BarGraph width={73} />
            <BarGraph width={62} />
            <BarGraph width={98} />
          </div>
        </div>
        <P size="S" className={styles.movie__descr}>
          {year && `${year}, `}
          {`${country || countries[0]}, `}
          {genres?.length && `${genres[0]}`}
        </P>
        <P size="S">{duration}</P>
      </div>
    </div>
  );
};

export default WatchModalInfoCard;
