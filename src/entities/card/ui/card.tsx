import cn from 'classnames';
import dayjs from 'dayjs';
import i18next from 'i18next';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { CardProps } from '@/entities/card';
import {
  AddToFavoritesButton,
  BlockButton,
  FindSimilarButton,
  RateButton,
} from '@/entities/card/buttons';
import { CardLoader } from '@/entities/card/ui/card-loader';
import { BarGraph, Text } from '@/newui';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';

import styles from './card.module.scss';

export const Card: FC<CardProps> = ({
  card,
  star,
  book,
  find,
  block,
  hover = true,

  info = true,
  ...props
}): JSX.Element => {
  const {
    kinopoiskId: id,
    filmId,
    countries,
    genres,
    posterUrlPreview,
    year,
    filmLength,
    ratingKinopoisk,
  } = card || {};
  const movieName = useLocalizeName(card);
  if (!card?.posterUrlPreview) return <CardLoader />;
  return (
    <Link href={`/watch/${id || filmId}`} className={styles.card} draggable="false" {...props}>
      <div className={cn(styles.imageSection, hover && styles.hover)}>
        {posterUrlPreview && (
          <Image src={posterUrlPreview} alt={'poster'} width={234} height={360} quality={85} />
        )}
        <div className={styles.props}>
          <div className={styles.btns__container}>
            <div className={styles.btns}>
              {book && <AddToFavoritesButton />}
              {find && <FindSimilarButton />}
              {star && <RateButton />}
              {block && <BlockButton />}
            </div>
          </div>
          {info && (
            <div className={styles.info}>
              <div className={styles.ratings}>
                {ratingKinopoisk || 5}
                <div className={styles.graphs}>
                  <BarGraph width={(ratingKinopoisk || 5) * 0.7 * 10 - 0.2} />
                  <BarGraph width={(ratingKinopoisk || 5) * 0.9 * 10 - 0.2} />
                  <BarGraph width={(ratingKinopoisk || 5) * 1.2 * 10 - 0.2} />
                  <BarGraph width={(ratingKinopoisk || 5) * 0.8 * 10 - 0.2} />
                </div>
              </div>
              <div className={styles.singleGraph}>
                <span>{i18next.language == 'en' ? 'actors' : 'актёры'}</span>
                <BarGraph width={(ratingKinopoisk || 5) * 10 - 0.2} />
              </div>
              <section className={styles.info__text}>
                <div className={styles.info__row}>
                  {year && `${year}, `}
                  {countries?.length && `${countries[0].country}, `}
                  {genres?.length && `${genres[0]?.genre}`}
                </div>
                {filmLength && (
                  <div className={styles.info__row}>
                    {dayjs.duration(filmLength, 'minutes').format('H часа mm минут')}
                  </div>
                )}
              </section>
            </div>
          )}
        </div>
      </div>
      <div className={styles.textSection} title={movieName}>
        <Text>{movieName}</Text>
      </div>
    </Link>
  );
};
