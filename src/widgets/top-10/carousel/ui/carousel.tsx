import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { Title } from '@/newui';
import { useFetchTopFilmQuery } from '@/shared/services';
import { iFilm } from '@/shared/types/kinopoiskTypes';
import { TopTenCard } from '@/widgets/top-10';

import { settings } from '../model/settings';
import styles from './carousel.module.scss';

export const TopTenCarousel = () => {
  const { t } = useTranslation();
  const { data: popularMovies } = useFetchTopFilmQuery({ type: 'TOP_100_POPULAR_FILMS' });

  return (
    <div className={styles.carousel}>
      <div className={styles.title}>
        <Link href={'/movies'}>
          <Image src={'/images/top10/top10.svg'} width={116} height={24} alt={'top10'} />
        </Link>
        <Link href={'/movies'}>
          <Title tag={'h3'}>{t('sections.during-week')}</Title>
        </Link>
      </div>
      <Slider {...settings}>
        {(popularMovies?.films ? popularMovies.films.slice(0, 10) : new Array(10).fill(0)).map(
          (card: iFilm, index: number) => (
            <TopTenCard card={card} index={index} key={index} />
          )
        )}
      </Slider>
    </div>
  );
};
