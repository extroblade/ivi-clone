import { motion } from 'framer-motion';
import i18next from 'i18next';
import Link from 'next/link';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

import { Text } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { selectFilters } from '@/shared/store';
import { collections } from '@/widgets/footer/modal/list/model/collections';

import { ModalListProps } from '../model/props';
import styles from './modal-list.module.scss';

const years: number[] = [];

for (let i = 2010; i < 2024; i++) {
  years.push(i);
}

const variants = {
  visible: {
    paddingTop: 20,
    transition: { duration: 0.2 },
    opacity: 1,
    height: 'auto',
  },
  hidden: {
    transition: { duration: 0 },
    paddingTop: 0,
    opacity: 0,
    height: 0,
  },
};

export const ModalList: FC<ModalListProps> = ({ children, title, icon, isFilms }): JSX.Element => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const IconComponent = icon ? icon : undefined;
  const { t } = useTranslation();
  const { genres, countries } = useAppSelector(selectFilters);

  return (
    <div>
      <Text onClick={() => setIsListOpen((open) => !open)} size="M" className={styles.title}>
        {icon && IconComponent && <IconComponent />}
        {title} {isListOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
      </Text>
      <motion.div
        className={styles.wrap}
        initial={isListOpen ? 'visible' : 'hidden'}
        animate={isListOpen ? 'visible' : 'hidden'}
        variants={variants}
      >
        {isFilms && (
          <>
            <Link href={'#'} className={styles.list__link}>
              {i18next.language == 'en' ? `All ${title}` : `Все ${title}`}
            </Link>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                <Text className={styles.list__title}>{t('categories.genres')}</Text>
                {genres?.slice(0, 10).map((genre) => (
                  <Link className={styles.content__link} key={genre.genre} href={'/'}>
                    {genre.genre}
                  </Link>
                ))}
              </li>
              <li className={styles.flex}>
                <ul>
                  <li className={styles.list__item}>
                    <Text className={styles.list__title}>{t('categories.countries')}</Text>
                    {countries?.slice(0, 10).map((country) => (
                      <Link className={styles.content__link} key={country.country} href={'/'}>
                        {country.country}
                      </Link>
                    ))}
                  </li>
                  <li className={styles.list__item}>
                    <Text className={styles.list__title}>{t('categories.years')}</Text>
                    {years.map((year) => (
                      <Link className={styles.content__link} key={year} href={'/'}>
                        {year}
                      </Link>
                    ))}
                  </li>
                </ul>
                <div className={styles.list__item}>
                  {collections?.map((item) => (
                    <Link className={styles.list__link} key={item.title} href={item.link}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </>
        )}
        {children}
      </motion.div>
    </div>
  );
};
