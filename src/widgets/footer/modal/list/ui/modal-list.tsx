import { motion } from 'framer-motion';
import i18next from 'i18next';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

import { Text } from '@/newui';
import { defaultYearsRange } from '@/shared/constants/default-years-range';
import { useBooleanState } from '@/shared/hooks';
import { useFetchFilmFiltersQuery } from '@/shared/services';
import { collections } from '@/widgets/footer/modal/list/model/collections';

import { ModalListProps } from '../model/props';
import styles from './modal-list.module.scss';

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
  const [isOpen, { handleToggle }] = useBooleanState();
  const IconComponent = icon ? icon : undefined;
  const { t } = useTranslation();
  const { data: filters } = useFetchFilmFiltersQuery();

  return (
    <div>
      <Text onClick={handleToggle} size="M" className={styles.title}>
        {icon && IconComponent && <IconComponent />}
        {title} {isOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
      </Text>
      <motion.div
        className={styles.wrap}
        initial={isOpen ? 'visible' : 'hidden'}
        animate={isOpen ? 'visible' : 'hidden'}
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
                {filters?.genres?.slice(0, 10).map(({ genre, id }) => (
                  <Link className={styles.content__link} key={genre} href={`/movies?genre=${id}`}>
                    {genre}
                  </Link>
                ))}
              </li>
              <li className={styles.flex}>
                <ul>
                  <li className={styles.list__item}>
                    <Text className={styles.list__title}>{t('categories.countries')}</Text>
                    {filters?.countries?.slice(0, 10).map(({ country, id }) => (
                      <Link
                        className={styles.content__link}
                        key={country}
                        href={`/movies?country=${id}`}
                      >
                        {country}
                      </Link>
                    ))}
                  </li>
                  <li className={styles.list__item}>
                    <Text className={styles.list__title}>{t('categories.years')}</Text>
                    {defaultYearsRange.map(({ year }) => (
                      <Link
                        className={styles.content__link}
                        key={year}
                        href={`/movies?year=${year}`}
                      >
                        {year}
                      </Link>
                    ))}
                  </li>
                </ul>
                <div className={styles.list__item}>
                  {collections?.map(({ title, link }) => (
                    <Link className={styles.list__link} key={title} href={link}>
                      {title}
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
