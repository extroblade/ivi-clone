import i18next from 'i18next';
import Head from 'next/head';
import React from 'react';

import { PersonInfo } from '@/components';
import NotFoundPage from '@/pages/404';
import { iPerson } from '@/types/kinopoiskTypes';
import { Loader } from '@/UI';

const Person = ({ person }) => {
  if (!person?.personId) return <NotFoundPage />;

  const { nameRu, nameEn } = person;
  return (
    <>
      <Head>
        <title>{person ? (i18next.language == 'en' ? nameEn || nameRu : nameRu) : ''}</title>
      </Head>
      {person ? <PersonInfo person={person} /> : <Loader />}
    </>
  );
};

export default Person;

export async function getServerSideProps(context) {
  try {
    const { pid } = context.query;

    const person: iPerson = await fetch(`${process.env.API}/v1/staff/${pid - 1}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.X_API_KEY,
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    console.log(`Fetched person: ${person.nameRu}`);
    return { props: { person } };
  } catch (e) {
    return { props: { person: null } };
  }
}
