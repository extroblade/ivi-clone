import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiMoviePlay } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { IoSearchOutline } from 'react-icons/io5';

import { useDebounce } from '@/shared/hooks';
import { useLocalizeNameFunction } from '@/shared/hooks/useLocalizeName';
import { useFetchAllFilmsQuery, useFetchPersonNameQuery } from '@/shared/services';
import { Button, Loader, Modal, Text, Title } from '@/shared/ui';

import { useSearchModal } from '../../lib/hooks';
import { presets, RedirectProps } from '../model/props';
import styles from './search-modal.module.scss';

export const SearchModal: FC = (): JSX.Element => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const localize = useLocalizeNameFunction();
  const { isOpen, handleState } = useSearchModal();
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const debounceQuery = useDebounce(() => {
    setDebouncedQuery(inputRef.current?.value?.trim() || '');
  }, 200);
  const isSkippingFetching = !isOpen || !debouncedQuery || !inputRef?.current?.value.trim();
  useEffect(() => {
    debounceQuery();
  }, [inputRef.current?.value]);
  const { data: movies, isFetching: isMoviesLoading } = useFetchAllFilmsQuery(
    { keyword: debouncedQuery },
    { skip: isSkippingFetching }
  );
  const { data: persons, isFetching: isPersonsLoading } = useFetchPersonNameQuery(
    { name: debouncedQuery },
    { skip: isSkippingFetching }
  );

  const handleClearInput = () => {
    if (!inputRef.current?.value) {
      return;
    }
    inputRef.current.value = '';
  };

  const handleClose = () => {
    handleClearInput();
    handleState(false);
  };
  const handleRedirect = async ({ type, id }: RedirectProps) => {
    await router.push(`/${type}/${id}`);
    handleClose();
  };
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    inputRef?.current?.focus();
  }, [isOpen]);

  const isNothingFound =
    !!debouncedQuery && !isPersonsLoading && !isMoviesLoading && !persons?.total && !movies?.total;
  return (
    <Modal isOpen={isOpen} closeModal={handleClose}>
      <div className={styles.body}>
        <h3>{t('sections.search')}</h3>
        <div className={styles.input}>
          <input
            ref={inputRef}
            className={cn(!!inputRef?.current?.value && styles.input__active)}
            type="text"
          />
          <label>{i18n.language == 'ru' ? 'Фильмы, персоны' : 'Movies, persons'}</label>
          {!!inputRef?.current?.value ? (
            <CgClose className={styles.input__icon} onClick={handleClearInput} />
          ) : (
            <IoSearchOutline className={styles.input__icon} />
          )}
        </div>
        {(isMoviesLoading || isPersonsLoading) && inputRef?.current?.value && <Loader />}

        {!debouncedQuery || !inputRef?.current?.value.trim() ? (
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
        {isNothingFound && (
          <Title className={styles.not_found} tag={'h4'}>
            Ничего не найдено по запросу &quot;{debouncedQuery}&quot;
          </Title>
        )}
      </div>
    </Modal>
  );
};
