import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/redux';
import { selectAuth } from '@/store/reducers/auth.slice';
import { Htag } from '@/components/Htag/Htag';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import Card from '@/components/Card/Card';
import { Button } from '@/components/Button/Button';
import { BsTrash } from 'react-icons/bs';
import { useSearchParamsState } from '@/hooks/useSearchParamsState';
import AddNewMovie from '@/components/AdminPage/AddNewMovie';
import Loader from '@/components/Loader/Loader';

const PAGE_LIMIT = 10;

const Admin = () => {
  const { user } = useAppSelector(selectAuth);
  const { t } = useTranslation();
  const [page, setPage] = useSearchParamsState<number>({ name: 'page' });
  const { data: movies } = useFetchAllFilmsQuery({});
  if (user) return <NotFoundPage />; //todo: fix when slice is ready
  const del = (id: number) => {
    console.log('mock delete');
  };

  return (
    <>
      <Head>
        <title>{t('title.admin')}</title>
      </Head>
      <div>
        <Htag tag={'h3'}>{t('descriptions.admin')}</Htag>
        <AddNewMovie />
        {!movies?.length ? (
          <Loader />
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {movies.slice(page * PAGE_LIMIT, PAGE_LIMIT * (page + 1)).map((movie) => (
              <div
                key={movie.id}
                style={{
                  margin: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div>{movie.id}</div>
                <Card card={movie} />
                {!movies?.length && <div>mock data, unable to change</div>}
                <Button
                  appearance={'circle'}
                  style={{ margin: '3px' }}
                  onClick={() => del(movie.id)}
                >
                  <BsTrash />
                </Button>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {movies?.length &&
            [...Array(Math.ceil(movies?.length / 10))].map((i, index) => (
              <Button style={{ margin: '10px' }} key={index} onClick={() => setPage(() => index)}>
                {index + 1}
              </Button>
            ))}
        </div>
      </div>
    </>
  );
};

export default Admin;
