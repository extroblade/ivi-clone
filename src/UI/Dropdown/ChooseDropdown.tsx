import React, { FC, useEffect, useState } from 'react';
import styles from './Dropdown.module.scss';
import { BsCheckLg } from 'react-icons/bs';
import Dropdown from '@/UI/Dropdown/Dropdown';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  selectFilters,
  setCountry,
  setGenre,
  setYearFrom,
  setYearTo,
} from '@/store/reducers/filters.slice';
import { useFetchFilmFiltersQuery } from '@/services/movie.api';

interface iChooseDropdown {
  state: boolean;
  type: 'genre' | 'country' | 'years';
}

const years = [];
for (let i = 1950; i < 2024; i++) years.push(i);

const ChooseDropdown: FC<iChooseDropdown> = ({ state, type }): JSX.Element => {
  const { data } = useFetchFilmFiltersQuery();
  const { genre, yearTo, country } = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState([]);
  const [chosen, setChosen] = useState<string | null>(null);
  useEffect(() => {
    switch (type) {
      case 'genre':
        setCurrent(() => data?.genres.filter((genre) => genre.genre));
        break;
      case 'country':
        setCurrent(() => data?.countries.filter((country) => country.country));
        break;
      case 'years':
        setCurrent(() => years.sort((a, b) => b - a));
        break;
    }
  }, [data, data?.countries, data?.genres]);

  useEffect(() => {
    switch (type) {
      case 'genre':
        dispatch(setGenre(chosen));
        break;
      case 'country':
        dispatch(setCountry(chosen));
        break;
      case 'years':
        dispatch(setYearFrom(chosen || 1000));
        dispatch(setYearTo(chosen || 3000));
        break;
    }
  }, [chosen]);

  const set = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    if (chosen == item) {
      setChosen(() => null);
    } else {
      setChosen(() => item);
    }
  };
  return (
    <Dropdown state={state}>
      <div className={`${styles.dropdown} ${styles.choose}`}>
        <div className={styles.list_container}>
          <ul>
            {current?.length &&
              current.map((item) => {
                let itemTitle;
                let act;
                switch (type) {
                  case 'genre':
                    itemTitle = item?.genre;
                    act = genre;
                    break;
                  case 'country':
                    itemTitle = item?.country;
                    act = country;
                    break;
                  case 'years':
                    itemTitle = item;
                    act = yearTo;
                    break;
                }
                return (
                  <li key={item?.id || item} className={act == item ? styles.checked : ''}>
                    <label onClick={(e) => set(e, item)}>
                      <input type="checkbox" value={itemTitle} />
                      <div className={styles.input_text}>{itemTitle}</div>
                      <div className={styles.checkbox}>
                        <div className={styles.checkbox_selected}>
                          <BsCheckLg />
                        </div>
                      </div>
                    </label>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </Dropdown>
  );
};

export default ChooseDropdown;