import { PersonInfo } from '@/components/Person/Person';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import i18next from 'i18next';
import { useFetchAllPersonsQuery } from '@/services/person.api';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader/Loader';
import React, { useEffect, useState } from 'react';

const Person = () => {
  const router = useRouter();
  const pid = router.query.pid;
  const { data: persons, isLoading } = useFetchAllPersonsQuery();
  const [person, setPerson] = useState();
  useEffect(() => {
    if (persons?.length) {
      setPerson(() => persons.find((pers) => pers.id == pid));
    }
  }, [persons?.length]);
  if (!person?.id) return <NotFoundPage />;

  const { fullNameEn, fullName, name, enName } = person;
  return (
    <>
      <Head>
        <title>
          {person ? (i18next.language == 'en' ? fullNameEn || enName : fullName || name) : ''}
        </title>
      </Head>
      {isLoading && <Loader />}
      {!isLoading && person && <PersonInfo person={person} />}
    </>
  );
};

export default Person;
