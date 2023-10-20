import { PersonPage } from '@/pages/person';
import { iPerson } from '@/shared/types/kinopoiskTypes';

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
