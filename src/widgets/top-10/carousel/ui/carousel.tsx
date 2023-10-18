import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { useFetchTopFilmQuery } from '@/shared/services';
import { Title } from '@/shared/ui';
import { TopTenCard } from '@/widgets/top-10';

import { settings } from '../model/settings';
import styles from './carousel.module.scss';

export const TopTenCarousel = () => {
  const { t } = useTranslation();
  const { data: topTenMovies } = useFetchTopFilmQuery({ type: 'TOP_100_POPULAR_FILMS' });

  return (
    <>
      <Link className={styles.link} href={'/movies'}>
        <Image
          className={styles.img}
          src={'/images/top10/top10.svg'}
          width={116}
          height={24}
          alt={'top10'}
        />
        <Title tag={'h3'}>{t('sections.during-week')}</Title>
      </Link>
      <Slider {...settings}>
        {(topTenMovies?.films?.slice(0, 10) || new Array(10).fill(0)).map((card, index) => (
          <TopTenCard card={card} index={index} key={index} />
        ))}
      </Slider>
    </>
  );
};
