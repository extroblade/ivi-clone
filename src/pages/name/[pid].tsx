import Head from 'next/head';
import React from 'react';

import { NotFound } from '@/entities/not-found';
import { Person } from '@/entities/person/ui/person';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { iPerson } from '@/shared/types/kinopoiskTypes';

const PersonPage = ({ person }: { person: iPerson }) => {
  const name = useLocalizeName(person);

  if (!person || !person.nameRu) {
    return <NotFound />;
  }
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Person person={person} />
    </>
  );
};

export default PersonPage;

export async function getServerSideProps(context: { query: { pid: string } }) {
  try {
    const { pid } = context.query;

    const person: iPerson = await fetch(`${process.env.API}/v1/staff/${pid}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.X_API_KEY || '',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    console.log(`Fetched person: ${person.nameRu}`);
    return { props: { person } };
  } catch (e) {
    return { props: { person: null } };
  }
}
