import React, { FC, useEffect, useState } from 'react';
import styles from './SearchModal.module.scss';
import { CgClose } from 'react-icons/cg';
import { IoSearchOutline } from 'react-icons/io5';
import FullScreenModal from '@/UI/FullScreenModal/FullScreenModal';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { selectModal, setShowSearch } from '@/store/reducers/modals.slice';
import { usePreventScroll } from '@/hooks/usePreventScroll';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { Button } from '@/UI/Button/Button';
import { useRouter } from 'next/navigation';
import { P } from '@/UI/P/P';
import { BsPersonCircle } from 'react-icons/bs';
import { BiMoviePlay } from 'react-icons/bi';
import { useDebounce } from '@/hooks/useDebounce';
import Loader from '@/UI/Loader/Loader';

const SearchModal: FC = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const { t } = useTranslation();
  const { showSearch } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [fetchedPersons, setFetchedPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(() => true);
    const timer = setTimeout(() => setLoading(() => false), 300);
    return () => clearTimeout(timer);
  }, [query?.length]);

  const close = () => {
    setFetchedMovies(() => []);
    setFetchedPersons(() => []);
    dispatch(setShowSearch(false));
  };

  const request = useDebounce((text: string) => {
    setLoading(() => true);
    fetch(`${process.env.API}v2.2/films/?keyword=${text}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.X_API_KEY,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setFetchedMovies(() => json.items);
      })
      .then(() => setLoading(() => false))
      .catch((err) => console.log(err));
    fetch(`${process.env.API}v1/persons/?name=${text}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.X_API_KEY,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setFetchedPersons(() => json.items);
      })
      .then(() => setLoading(() => false))
      .catch((err) => console.log(err));
  }, 300);

  const changeQuery = (e) => {
    setQuery(() => e.target.value);
  };
  const clearQuery = (): void => {
    setQuery('');
  };
  useEffect(() => {
    if (query?.length) {
      request(query);
    } else {
      setFetchedMovies(() => []);
      setFetchedPersons(() => []);
    }
  }, [query?.length]);
  const router = useRouter();
  const redirect = (item) => {
    if (item?.type) {
      router.push(`/watch/${item.kinopoiskId}`);
    } else if (item?.sex) {
      router.push(`/person/${item.kinopoiskId}`);
    } else {
      console.log('temporary');
    }
    setTimeout(() => {
      close();
      clearQuery();
    }, 300);
  };
  usePreventScroll(showSearch);
  const presets = ['Премьеры фильмов', 'Новинки подписки', 'Сериалы Amediateka', 'Высокий рейтинг'];
  return (
    <FullScreenModal isOpen={showSearch} closeModal={close}>
      <div className={styles.body}>
        <h3>{t('sections.search')}</h3>
        <div className={styles.input}>
          <input
            className={!!query ? styles.input__active : ''}
            type="text"
            value={query}
            onChange={(e) => changeQuery(e)}
          />
          <label>
            {i18next.language == 'ru' ? 'Фильмы, персоны, жанры' : 'Movies, persons, genres'}
          </label>
          {!!query ? (
            <CgClose className={styles.input__icon} onClick={clearQuery} />
          ) : (
            <IoSearchOutline className={styles.input__icon} />
          )}
        </div>
        {loading && <Loader />}

        {!fetchedMovies?.length && !fetchedMovies?.length ? (
          <div className={styles.presets}>
            {presets.map((preset, index) => (
              <div className={styles.preset} key={index}>
                <div className={styles.preset_inner}>
                  <a className={styles.link} onClick={() => redirect('/movies')}>
                    {preset}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.result}>
            {fetchedMovies?.length
              ? fetchedMovies.slice(0, 15).map((movie) => {
                  const { nameRu, nameEn, nameOriginal, kinopoiskId: id } = movie;
                  return (
                    <Button
                      onClick={() => redirect(movie)}
                      appearance={'transparent'}
                      key={id + 'm'}
                    >
                      <BiMoviePlay />
                      <P>{nameRu || nameEn || nameOriginal}</P>
                    </Button>
                  );
                })
              : ''}
            {fetchedPersons?.length
              ? fetchedPersons.slice(0, 15).map((person) => {
                  const { kinopoiskId, nameRu, nameEn, nameOriginal } = person;
                  return (
                    <Button
                      onClick={() => redirect(person)}
                      appearance={'transparent'}
                      key={kinopoiskId + 'p'}
                    >
                      <BsPersonCircle />
                      <P>{nameRu || nameEn || nameOriginal}</P>
                    </Button>
                  );
                })
              : ''}
          </div>
        )}
      </div>
    </FullScreenModal>
  );
};

export default SearchModal;
