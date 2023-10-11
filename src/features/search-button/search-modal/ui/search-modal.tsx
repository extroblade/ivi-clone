import i18next from 'i18next';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiMoviePlay } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { IoSearchOutline } from 'react-icons/io5';

import { presets, RedirectProps } from '@/features/search-button/search-modal/model/props';
import { Button, Loader, Modal, Text, Title } from '@/newui';
import { useDebounce } from '@/shared/hooks';
import { useLocalizeNameFunction } from '@/shared/hooks/useLocalizeName';
import { useFetchAllFilmsQuery, useFetchPersonNameQuery } from '@/shared/services';

import { useSearchModal } from '../../lib/hooks';
import styles from './search-modal.module.scss';

export const SearchModal: FC = (): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation();
  const localize = useLocalizeNameFunction();
  const [query, setQuery] = useState<string>('');
  const { isOpen, handleState } = useSearchModal();
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const debounceQuery = useDebounce(() => {
    setDebouncedQuery(query.trim());
  }, 500);
  useEffect(() => {
    debounceQuery();
  }, [query]);
  const { data: movies, isFetching: isMoviesLoading } = useFetchAllFilmsQuery(
    { keyword: debouncedQuery },
    { skip: !isOpen || !query.trim() }
  );
  const { data: persons, isFetching: isPersonsLoading } = useFetchPersonNameQuery(
    { name: debouncedQuery },
    { skip: !isOpen || !query.trim() }
  );

  const handleClearInput = () => {
    setQuery('');
  };

  const handleClose = () => {
    handleClearInput();
    handleState(false);
  };
  const handleRedirect = ({ type, id }: RedirectProps) => {
    router.push(`/${type}/${id}`).then(() => {
      handleClose();
    });
  };
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    inputRef?.current?.focus();
  }, [isOpen]);
  return (
    <Modal isOpen={isOpen} closeModal={handleClose}>
      <div className={styles.body}>
        <h3>{t('sections.search')}</h3>
        <div className={styles.input}>
          <input
            ref={inputRef}
            className={!!query ? styles.input__active : ''}
            type="text"
            value={query}
            onChange={({ target: { value } }) => setQuery(value)}
          />
          <label>{i18next.language == 'ru' ? 'Фильмы, персоны' : 'Movies, persons'}</label>
          {!!query ? (
            <CgClose className={styles.input__icon} onClick={handleClearInput} />
          ) : (
            <IoSearchOutline className={styles.input__icon} />
          )}
        </div>
        {(isMoviesLoading || isPersonsLoading) && query && <Loader />}

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
            {movies?.items.slice(0, 15).map((movie) => (
              <Button
                title={localize(movie)}
                onClick={() => handleRedirect({ type: 'watch', id: movie.kinopoiskId })}
                appearance={'transparent'}
                key={movie.kinopoiskId}
              >
                <BiMoviePlay />
                <Text>{localize(movie)}</Text>
              </Button>
            ))}
            {persons?.items.slice(0, 15).map((person) => (
              <Button
                title={localize(person)}
                onClick={() => handleRedirect({ type: 'name', id: person.kinopoiskId })}
                appearance={'transparent'}
                key={person.kinopoiskId}
              >
                <BsPersonCircle />
                <Text>{localize(person)}</Text>
              </Button>
            ))}
          </div>
        )}
        {!!query.trim() &&
          !isPersonsLoading &&
          !isMoviesLoading &&
          !persons?.total &&
          !movies?.total && (
            <Title className={styles.not_found} tag={'h4'}>
              Ничего не найдено по запросу &quot;{debouncedQuery}&quot;
            </Title>
          )}
      </div>
    </Modal>
  );
};
