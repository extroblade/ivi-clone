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
import { useFetchAllFilmsQuery, useFetchPersonNameQuery } from '@/shared/services';

import { useSearchModal } from '../../lib/hooks';
import styles from './search-modal.module.scss';

export const SearchModal: FC = (): JSX.Element => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const [query, setQuery] = useState<string>('');
  const { isOpen, handleState } = useSearchModal();
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const debounceQuery = useDebounce(() => {
    setDebouncedQuery(query.trim());
  }, 300);
  useEffect(() => {
    debounceQuery();
  }, [query]);
  const { data: movies, isFetching: isMoviesLoading } = useFetchAllFilmsQuery(
    { keyword: debouncedQuery },
    { skip: !isOpen || !query }
  );
  const { data: persons, isFetching: isPersonsLoading } = useFetchPersonNameQuery(
    { name: debouncedQuery },
    { skip: !isOpen || !query }
  );

  const handleClose = () => {
    setQuery('');
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
            <CgClose className={styles.input__icon} onClick={() => setQuery('')} />
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
            {movies?.total
              ? movies.items.slice(0, 15).map((movie) => {
                  const { nameRu, nameEn, nameOriginal, kinopoiskId: id } = movie;
                  const name =
                    i18n.language === 'en'
                      ? nameEn || nameOriginal || nameRu
                      : nameRu || nameOriginal || nameEn;
                  return (
                    <Button
                      title={name}
                      onClick={() => handleRedirect({ type: 'watch', id })}
                      appearance={'transparent'}
                      key={id + 'm'}
                    >
                      <BiMoviePlay />
                      <Text>{name}</Text>
                    </Button>
                  );
                })
              : ''}
            {persons?.total
              ? persons.items.slice(0, 15).map((person) => {
                  const { kinopoiskId: id, nameRu, nameEn, nameOriginal } = person;
                  const name =
                    i18n.language === 'en'
                      ? nameEn || nameOriginal || nameRu
                      : nameRu || nameOriginal || nameEn;
                  return (
                    <Button
                      title={name}
                      onClick={() => handleRedirect({ type: 'person', id })}
                      appearance={'transparent'}
                      key={id + 'p'}
                    >
                      <BsPersonCircle />
                      <Text>{name}</Text>
                    </Button>
                  );
                })
              : ''}
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
