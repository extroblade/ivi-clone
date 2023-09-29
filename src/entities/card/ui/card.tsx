import cn from 'classnames';
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
import { countTime } from '@/shared/helpers';

import styles from './card.module.scss';

export const Card: FC<CardProps> = ({
  card,
  hover = true,
  star = false,
  book = false,
  find = false,
  block = false,
  info = true,
  ...props
}): JSX.Element => {
  if (!card) return <CardLoader />;
  const {
    kinopoiskId: id,
    filmId,
    countries,
    genres,
    nameRu,
    nameOriginal,
    nameEn,
    posterUrlPreview,
    year,
    filmLength,
    ratingKinopoisk,
  } = card;
  const i18nTitle =
    i18next.language == 'en' ? nameEn || nameOriginal || nameRu : nameRu || nameOriginal || nameEn;
  return (
    <Link href={`/watch/${id || filmId}`} className={styles.card} draggable="false" {...props}>
      <div className={cn(styles.imageSection, hover && styles.hover)}>
        <Image
          src={posterUrlPreview}
          alt={i18nTitle || 'title'}
          width={234}
          height={360}
          quality={85}
        />
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
                {ratingKinopoisk}
                <div className={styles.graphs}>
                  <BarGraph width={ratingKinopoisk * 0.7 * 10 - 0.2} />
                  <BarGraph width={ratingKinopoisk * 0.9 * 10 - 0.2} />
                  <BarGraph width={ratingKinopoisk * 1.2 * 10 - 0.2} />
                  <BarGraph width={ratingKinopoisk * 0.8 * 10 - 0.2} />
                </div>
              </div>
              <div className={styles.singleGraph}>
                <span>{i18next.language == 'en' ? 'actors' : 'актёры'}</span>
                <BarGraph width={ratingKinopoisk * 10 - 0.2} />
              </div>
              <section className={styles.info__text}>
                <div className={styles.info__row}>
                  {year && `${year}, `}
                  {countries?.length && `${countries[0].country}, `}
                  {genres?.length && `${genres[0]?.genre}`}
                </div>
                {filmLength && <div className={styles.info__row}>{countTime(filmLength)}</div>}
              </section>
            </div>
          )}
        </div>
      </div>
      <div className={styles.textSection} title={i18nTitle}>
        <Text>{i18nTitle}</Text>
      </div>
    </Link>
  );
};
