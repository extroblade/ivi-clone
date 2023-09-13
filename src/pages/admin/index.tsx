import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsTrash } from 'react-icons/bs';

import { useAppSelector, useSearchParamsState } from '@/hooks';
import NotFoundPage from '@/pages/404';
import { useFetchAllFilmsQuery } from '@/services';
import { selectAuth } from '@/store';
import { AddNewMovie, Button, Card, Htag, Loader } from '@/UI';

const PAGE_LIMIT = 10;

const Admin = () => {
  const { user } = useAppSelector(selectAuth);
  const { t } = useTranslation();
  const [page, setPage] = useSearchParamsState<number>({ name: 'page' });
  const { data: movies } = useFetchAllFilmsQuery({});
  if (user) return <NotFoundPage />; //todo: fix when slice is ready
  const del = () => {
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
                <div>{movie?.id || 0}</div>
                <Card card={movie} />
                {!movies?.length && <div>mock data, unable to change</div>}
                <Button appearance={'circle'} style={{ margin: '3px' }} onClick={() => del()}>
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
