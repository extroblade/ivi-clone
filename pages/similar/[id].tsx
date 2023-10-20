import { SimilarPage } from '@/pages/similar';
import { iFilm } from '@/shared/types/kinopoiskTypes';

export default SimilarPage;

export async function getServerSideProps(context: { query: { id: any } }) {
  try {
    const { id } = context.query;
    const movie: iFilm = await fetch(`${process.env.API}v2.2/films/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.X_API_KEY || '',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
    const similar: iFilm = await fetch(`${process.env.API}v2.2/films/${id}/similars`, {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.X_API_KEY || '',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    return { props: { movie, similar } };
  } catch (e) {
    return { props: { movie: null } };
  }
}
