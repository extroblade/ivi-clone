import cn from 'classnames';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsCheckLg } from 'react-icons/bs';
import { GoSettings } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';

import { Dropdown, SortDropdown } from '@/entities/dropdown';
import { Button, InputRange } from '@/newui';
import { Plank } from '@/newui/plank/plank';
import { useSearchParamsState } from '@/shared/hooks';
import { useFetchFilmFiltersQuery } from '@/shared/services';

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
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [param, setParam] = useSearchParamsState<string>({
    name: name,
  });
  const [title, setTitle] = useState(defaultName);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleClick = (id: number) => {
    setParam(id === Number(router.query?.[name]) ? '' : id);
    //handleClose();
  };
  const handleToggle = () => {
    setIsOpen((v) => !v);
  };

  useEffect(() => {
    setTitle(() => data.find((item) => item.id == router.query?.[name])?.[name] || defaultName);
  }, [router.query?.[name]]);
  return (
    <div className={styles.plank_item}>
      <Plank title={title} isActive={isOpen} onToggle={handleToggle} onClose={handleClose}>
        <Dropdown state={isOpen}>
          <div className={cn(styles.dropdown, styles.choose)}>
            <div className={styles.list_container}>
              <ul>
                {data?.map((item) => (
                  <li
                    onClick={() => handleClick(item.id)}
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
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    setIsActive(!!Object.values(router.query).filter((item) => item?.length).length);
  }, [router.query]);

  const handleToggle = () => {
    setIsOpen((value) => !value);
  };
  const handleReset = () => {
    router.push('').then(() => {
      setIsActive(() => false);
    });
  };
  return (
    <>
      <div className={styles.openers}>
        <Button appearance={'transparent'} onClick={handleToggle}>
          <div className={styles.filters__icon}>
            <GoSettings />
            <div className={styles.open_filter}>
              {isOpen ? t('buttons.collapse') : t('buttons.filters')}
            </div>
          </div>
        </Button>
        <SortDropdown />
      </div>

      <motion.div
        initial={isOpen ? 'visible' : 'hidden'}
        animate={isOpen ? 'visible' : 'hidden'}
        variants={variants}
        className={styles.filters}
      >
        <div className={styles.plank_list}>
          {filters?.genres && (
            <FilterPlank
              data={filters.genres.filter((item) => item.genre)}
              defaultName={'Жанр'}
              name={'genre'}
            />
          )}
          {filters?.countries && (
            <FilterPlank
              data={filters.countries.filter((item) => item.country)}
              defaultName={'Страна'}
              name={'country'}
            />
          )}
          <FilterPlank data={years} defaultName={'Год'} name={'year'} />
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
          <div>
            <RxCross2 size={'20px'} />
          </div>
          <div>{t('buttons.reset-filters')}</div>
        </Button>
      </motion.div>
    </>
  );
};
