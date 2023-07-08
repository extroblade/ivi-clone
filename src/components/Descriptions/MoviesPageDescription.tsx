import React from 'react';
import { Htag } from '@/UI/Htag/Htag';
import Description from '@/UI/Description/Description';
import Link from 'next/link';
import { P } from '@/UI/P/P';
import { useTranslation } from 'react-i18next';

const MoviesPageDescription = () => {
  const { t } = useTranslation();
  return (
    <Description
      title={<Htag tag={'h2'}>{t('descriptions.movies-page-title')}</Htag>}
      cut={
        <P size={'M'}>
          {t('descriptions.movies-page-cut-1')}
          <Link href={'/'}> {t('descriptions.movies-page-cut-2')} </Link>
          {t('descriptions.movies-page-cut-3')}
        </P>
      }
    >
      <>
        <P size={'M'}>{t('descriptions.movies-page-text-1')}</P>
        <P size={'M'}>{t('descriptions.movies-page-text-2')}</P>
        <P size={'M'}>{t('descriptions.movies-page-text-3')}</P>
        <P size={'M'}>{t('descriptions.movies-page-text-4')}</P>
      </>
    </Description>
  );
};

export default MoviesPageDescription;
