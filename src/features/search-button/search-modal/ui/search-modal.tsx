import i18next from 'i18next';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiMoviePlay } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { IoSearchOutline } from 'react-icons/io5';

import { Button, Loader, Modal, Text } from '@/newui';
import { useDebounce, usePreventScroll } from '@/shared/hooks';
import { useFetchAllFilmsQuery, useFetchPersonNameQuery } from '@/shared/services';

import { useSearchModal } from '../../lib/hooks';
import styles from './search-modal.module.scss';

const presets = ['Премьеры фильмов', 'Новинки подписки', 'Сериалы Amediateka', 'Высокий рейтинг'];
type RedirectProps = {
  type: 'watch' | 'person' | 'movies';
  id?: string | number;
};
export const SearchModal: FC = (): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation();

  const [query, setQuery] = useState<string>('');
  const { isOpen, handleState } = useSearchModal();
  const [debounceQuery, setDebounceQuery] = useState('');

  useEffect(() => {
    makeRequest();
  }, [query]);
  const makeRequest = useDebounce(() => {
    setDebounceQuery(query.trim());
  }, 300);
  const { data: movies, isFetching: isMoviesLoading } = useFetchAllFilmsQuery({
    keyword: debounceQuery,
  });
  const { data: persons, isFetching: isPersonsLoading } = useFetchPersonNameQuery({
    name: debounceQuery,
  });

  const handleClose = () => {
    setQuery('');
    handleState(false);
  };
  const handleRedirect = ({ type, id }: RedirectProps) => {
    router.push(`/${type}/${id}`).then(() => {
      handleClose();
    });
  };
  usePreventScroll(isOpen);
  return (
    <Modal isOpen={isOpen} closeModal={handleClose}>
      <div className={styles.body}>
        <h3>{t('sections.search')}</h3>
        <div className={styles.input}>
          <input
            className={!!query ? styles.input__active : ''}
            type="text"
            value={query}
            onChange={({ target: { value } }) => setQuery(value)}
          />
          <label>
            {i18next.language == 'ru' ? 'Фильмы, персоны, жанры' : 'Movies, persons, genres'}
          </label>
          {!!query ? (
            <CgClose className={styles.input__icon} onClick={() => setQuery('')} />
          ) : (
            <IoSearchOutline className={styles.input__icon} />
          )}
        </div>
        {(isMoviesLoading || isPersonsLoading) && <Loader />}

        {!query ? (
          <div className={styles.presets}>
            {presets.map((preset, index) => (
              <div className={styles.preset} key={index}>
                <div className={styles.preset_inner}>
                  <a className={styles.link} onClick={() => handleRedirect({ type: 'movies' })}>
                    {preset}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.result}>
            {movies?.total
              ? movies.items.slice(0, 15).map((movie) => {
                  const { nameRu, nameEn, nameOriginal, kinopoiskId: id } = movie;
                  return (
                    <Button
                      onClick={() => handleRedirect({ type: 'watch', id })}
                      appearance={'transparent'}
                      key={id + 'm'}
                    >
                      <BiMoviePlay />
                      <Text>{nameRu || nameEn || nameOriginal}</Text>
                    </Button>
                  );
                })
              : ''}
            {persons?.total
              ? persons.items.slice(0, 15).map((person) => {
                  const { kinopoiskId: id, nameRu, nameEn, nameOriginal } = person;
                  return (
                    <Button
                      onClick={() => handleRedirect({ type: 'person', id })}
                      appearance={'transparent'}
                      key={id + 'p'}
                    >
                      <BsPersonCircle />
                      <Text>{nameRu || nameEn || nameOriginal}</Text>
                    </Button>
                  );
                })
              : ''}
          </div>
        )}
      </div>
    </Modal>
  );
};
