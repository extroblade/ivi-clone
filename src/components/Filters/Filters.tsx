import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GoSettings } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';

import { SortDropdown } from '@/components';
import { Button, InputRange } from '@/newui';
import { Plank } from '@/newui/plank/plank';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { resetFilters, selectFilters } from '@/shared/store';

import styles from './Filters.module.scss';

const variants = {
  visible: {
    transition: { duration: 0.4 },
    opacity: 1,
    marginBottom: 20,
    height: '100%',
  },
  hidden: {
    transition: { duration: 0.4 },
    marginBottom: -40,
    opacity: 0,
    height: '0px',
  },
};
export const Filters: FC = (): JSX.Element => {
  const [openedFilter, setOpenedFilter] = useState(false);
  const [active, setActive] = useState<boolean>(false);
  const { genre, yearTo, country, ratingFrom } = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    setActive(
      () =>
        !!(
          (typeof genre === 'object' ? genre?.genre : genre) ||
          (typeof country === 'object' ? country?.country : country) ||
          +yearTo < 3000 ||
          +ratingFrom > 0
        )
    );
  }, [genre, yearTo, country, ratingFrom]);
  const reset = () => {
    dispatch(resetFilters());
    setActive(() => false);
  };
  return (
    <>
      <div className={styles.openers}>
        <Button appearance={'transparent'} onClick={() => setOpenedFilter(!openedFilter)}>
          <div className={styles.filters__icon}>
            <GoSettings />
            <div className={styles.open_filter}>
              {openedFilter ? t('buttons.collapse') : t('buttons.filters')}
            </div>
          </div>
        </Button>
        <SortDropdown />
      </div>

      <motion.div
        initial={openedFilter ? 'visible' : 'hidden'}
        animate={openedFilter ? 'visible' : 'hidden'}
        variants={variants}
        className={styles.filters}
      >
        <div className={styles.plank_list}>
          <div className={styles.plank_item}>
            <Plank type={'choose'} array_type={'genre'} />
          </div>
          <div className={styles.plank_item}>
            <Plank type={'choose'} array_type={'country'} />
          </div>
          <div className={styles.plank_item}>
            <Plank type={'choose'} array_type={'years'} />
          </div>
          {/*<div className={styles.plank_item}>*/}
          {/*  <Plank title={'asd'} type={'find'} />*/}
          {/*</div>*/}
          {/*<div className={styles.plank_item}>*/}
          {/*  <Plank title={'asd'} type={'find'} />*/}
          {/*</div>*/}
          {/*<div className={styles.plank_item}>*/}
          {/*  <Plank title={'asd'} type={'choose'} />*/}
          {/*</div>*/}
          <div className={styles.plank_item}>
            <InputRange minLimit={0} maxLimit={10} range={1}>
              {t('sections.rating')}
            </InputRange>
          </div>
        </div>
        <Button
          appearance={'transparent'}
          className={styles.reset}
          onClick={reset}
          disabled={!active}
        >
          <div>
            <RxCross2 size={'20px'} />
          </div>
          <div>{t('buttons.reset-filters')}</div>
        </Button>
      </motion.div>
    </>
  );
};

// <div className={styles.plank_item}>
//   <InputRange minLimit={0} maxLimit={1_000_000} range={993} type={'comments'}>
//     {t('sections.rates-amount')}
//   </InputRange>
// </div>
