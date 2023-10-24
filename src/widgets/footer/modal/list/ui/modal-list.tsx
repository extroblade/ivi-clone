import { motion } from 'framer-motion';
import i18next from 'i18next';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

import { defaultYearsRange } from '@/shared/constants/default-years-range';
import { useBooleanState } from '@/shared/hooks';
import { useFetchFilmFiltersQuery } from '@/shared/services';
import { Text } from '@/shared/ui';

import { collections } from '../model/collections';
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

export const ModalList = ({
  children,
  href,
  title,
  icon,
  isFilms,
}: {
  children?: ReactNode | ReactNode[];
  title: ReactNode | ReactNode[];
  icon?: IconType;
  isFilms?: boolean;
  href?: string;
}) => {
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
            <Link href={'#'} className={styles.link}>
              {i18next.language == 'en' ? `All ${title}` : `Все ${title}`}
            </Link>
            <div className={styles.list}>
              <ul className={styles.flex}>
                <li className={styles.list__item}>
                  <Text className={styles.list__title}>{t('categories.genres')}</Text>
                  {filters?.genres?.slice(0, 10).map(({ genre, id }) => (
                    <Link className={styles.link} key={genre} href={`/${href}?genre=${id}`}>
                      {genre}
                    </Link>
                  ))}
                </li>
                <li className={styles.list__item}>
                  <Text className={styles.list__title}>{t('categories.countries')}</Text>
                  {filters?.countries?.slice(0, 10).map(({ country, id }) => (
                    <Link className={styles.link} key={country} href={`/${href}?country=${id}`}>
                      {country}
                    </Link>
                  ))}
                </li>
                <li className={styles.list__item}>
                  <Text className={styles.list__title}>{t('categories.years')}</Text>
                  {defaultYearsRange.slice(0, 10).map(({ year }) => (
                    <Link className={styles.link} key={year} href={`/${href}?year=${year}`}>
                      {year}
                    </Link>
                  ))}
                </li>
                <div className={styles.list__item}>
                  {collections?.map(({ title, link }) => (
                    <Link className={styles.link} key={title} href={link}>
                      {title}
                    </Link>
                  ))}
                </div>
              </ul>
            </div>
          </>
        )}
        {children}
      </motion.div>
    </div>
  );
};
