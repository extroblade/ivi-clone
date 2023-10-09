import cn from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { GoSettings } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';

import { SortDropdown } from '@/entities/dropdown';
import { Button, InputRange } from '@/newui';
import { defaultYearsRange } from '@/shared/constants/default-years-range';
import { useBooleanState } from '@/shared/hooks';
import { useFetchFilmFiltersQuery } from '@/shared/services';
import { FilterPlank } from '@/widgets/filter/plank/ui/plank';

import styles from './filters.module.scss';

const variants = {
  visible: {
    transition: { duration: 0.2 },
    opacity: 1,
    marginBottom: 20,
    height: '100%',
    display: 'block',
  },
  hidden: {
    transition: { duration: 0.4 },
    marginBottom: -40,
    opacity: 0,
    height: '0px',
    display: 'none',
  },
};
export const Filters: FC<{ initialState?: boolean }> = ({ initialState }): JSX.Element => {
  const { data: filters } = useFetchFilmFiltersQuery();
  const [isOpen, { handleToggle: handleToggleFilters }] = useBooleanState(initialState);
  const [isActive, { handleClose: handleResetActive, handleState: setIsActive }] =
    useBooleanState();
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    setIsActive(!!Object.values(router.query).filter((item) => item?.length).length);
  }, [router.query]);
  const genres = useMemo(() => {
    return filters?.genres.filter(({ genre }) => genre) || [];
  }, [filters?.genres]);
  const countries = useMemo(() => {
    return filters?.countries.filter(({ country }) => country) || [];
  }, [filters?.countries]);

  const handleReset = () => {
    router.push('').then(() => {
      handleResetActive();
    });
  };
  return (
    <>
      <div className={styles.top_buttons}>
        <Button appearance={'transparent'} onClick={handleToggleFilters}>
          <div className={styles.extend_button}>
            <div className={cn(styles.icon, isActive && styles.active)}>
              <GoSettings />
            </div>
            <div className={styles.open_filter}>
              {isOpen ? t('buttons.collapse') : t('buttons.filters')}
            </div>
          </div>
        </Button>
        <SortDropdown />
      </div>

      <motion.div
        animate={isOpen ? 'visible' : 'hidden'}
        variants={variants}
        className={styles.filters}
      >
        <div className={styles.plank_list}>
          <div className={styles.plank_item}>
            <FilterPlank data={genres} defaultName={'Жанр'} name={'genre'} />
          </div>
          <div className={styles.plank_item}>
            <FilterPlank data={countries} defaultName={'Страна'} name={'country'} />
          </div>
          <div className={styles.plank_item}>
            <FilterPlank data={defaultYearsRange} defaultName={'Год'} name={'year'} />
          </div>
          <div className={styles.plank_item}>
            <InputRange name={'ratingFrom'} minLimit={0} maxLimit={10} range={1}>
              {t('sections.rating')}
            </InputRange>
          </div>
        </div>
        <Button
          appearance={'transparent'}
          className={styles.reset}
          onClick={handleReset}
          disabled={!isActive}
        >
          <RxCross2 size={'20px'} />
          {t('buttons.reset-filters')}
        </Button>
      </motion.div>
    </>
  );
};
