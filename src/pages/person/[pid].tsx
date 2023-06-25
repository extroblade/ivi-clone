import { PersonInfo } from '@/components/Person/Person';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import i18next from 'i18next';
import Loader from '@/components/Loader/Loader';
import React from 'react';

const Person = (props) => {
  const person = props.person;
  if (!person?.id) return <NotFoundPage />;

  const { fullNameEn, fullName, name, enName } = person;
  return (
    <>
      <Head>
        <title>
          {person ? (i18next.language == 'en' ? fullNameEn || enName : fullName || name) : ''}
        </title>
      </Head>
      {person ? <PersonInfo person={person} /> : <Loader />}
    </>
  );
};

export default Person;

export async function getServerSideProps(context) {
  const { pid } = context.query;
  const res = await fetch(`${process.env.SERVER}/persons/${pid - 1}`);
  const person = await res.json();

  console.log(`Fetched person: ${person.name}`);
  return { props: { person } };
}
