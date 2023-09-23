import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsTrash } from 'react-icons/bs';

import { useSearchParamsState } from '@/hooks';
import NotFoundPage from '@/pages/404';
import { useFetchAllFilmsQuery } from '@/shared/services';
import { iFilm } from '@/shared/types/kinopoiskTypes';
import { AddNewMovie, Button, Card, Htag, Loader } from '@/UI';

const PAGE_LIMIT = 10;

const Admin = () => {
  const { t } = useTranslation();
  const [page, setPage] = useSearchParamsState<number>({ name: 'page' });
  const { data: movies } = useFetchAllFilmsQuery({});
  if (page < 2) return <NotFoundPage />;
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
        {!movies?.total ? (
          <Loader />
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {movies.items.slice(page * PAGE_LIMIT, PAGE_LIMIT * (page + 1)).map((movie: iFilm) => (
              <div
                key={movie.kinopoiskId}
                style={{
                  margin: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div>{movie.kinopoiskId}</div>
                <Card card={movie} />
                {!movies?.total && <div>mock data, unable to change</div>}
                <Button appearance={'circle'} style={{ margin: '3px' }} onClick={() => del()}>
                  <BsTrash />
                </Button>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {movies?.total &&
            [...Array(Math.ceil(movies?.total / 10))].map((i, index) => (
              <Button style={{ margin: '10px' }} key={index} onClick={() => setPage(index)}>
                {index + 1}
              </Button>
            ))}
        </div>
      </div>
    </>
  );
};

export default Admin;
