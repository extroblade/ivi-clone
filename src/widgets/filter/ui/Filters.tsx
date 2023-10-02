import cn from 'classnames';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsCheckLg } from 'react-icons/bs';
import { GoSettings } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';

import { Dropdown, SortDropdown } from '@/entities/dropdown';
import { Button, InputRange } from '@/newui';
import { Plank } from '@/newui/plank/plank';
import { useAppSelector, useSearchParamsState } from '@/shared/hooks';
import { useFetchFilmFiltersQuery } from '@/shared/services';
import { selectFilters } from '@/shared/store';

import styles from './Filters.module.scss';

const years: any[] = [];
for (let i = dayjs().year(); i >= 1950; i--) {
  years.push({ year: i, id: i });
}

const FilterPlank = ({
  data,
  name,
  defaultName,
}: {
  data: any[];
  name: string;
  defaultName: string;
}) => {
  const [plankOpen, setPlankOpen] = useState(false);
  const [param, setParam] = useSearchParamsState<string>({
    name: name,
  });
  const [title, setTitle] = useState(defaultName);
  useEffect(() => {
    if (!param) {
      return;
    }
    setTitle(() => data.find((item) => item.id == param)?.[name]);
  }, [param]);
  return (
    <div className={styles.plank_item}>
      <Plank
        title={title}
        isActive={plankOpen}
        onToggle={() => setPlankOpen((v) => !v)}
        onClose={() => setPlankOpen(false)}
      >
        <Dropdown state={plankOpen}>
          <div className={cn(styles.dropdown, styles.choose)}>
            <div className={styles.list_container}>
              <ul>
                {data?.map((item) => (
                  <li
                    onClick={() => setParam(item.id)}
                    key={item.id}
                    title={'title'}
                    className={cn(item?.[name] == title && styles.checked)}
                  >
                    <label>
                      <input type="checkbox" value={item[name]} />
                      <div className={styles.input_text}>{item[name]}</div>
                      <div className={styles.checkbox}>
                        <div className={styles.checkbox_selected}>
                          <BsCheckLg />
                        </div>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Dropdown>
      </Plank>
    </div>
  );
};

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
  const { data: filters } = useFetchFilmFiltersQuery();
  const [openedFilter, setOpenedFilter] = useState(false);
  const [active, setActive] = useState(false);
  const { genre, yearFrom, country, ratingFrom } = useAppSelector(selectFilters);
  const { t } = useTranslation();
  useEffect(() => {
    setActive(!!(genre || country || +yearFrom > 1000 || ratingFrom));
  }, [genre, yearFrom, country, ratingFrom]);
  const router = useRouter();
  const reset = () => {
    router.push('').then(() => {
      setActive(() => false);
    });
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
          {filters && (
            <>
              <FilterPlank
                data={filters.genres.filter((item) => item.genre)}
                defaultName={'Жанр'}
                name={'genre'}
              />
              <FilterPlank
                data={filters.countries.filter((item) => item.country)}
                defaultName={'Страна'}
                name={'country'}
              />
            </>
          )}
          <FilterPlank data={years} defaultName={'Год'} name={'year'} />
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
