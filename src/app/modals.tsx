import { RatingModal } from '@/features/rating-block';
import { UnsubscribeModal } from '@/features/unsubscribe';
import { AlertList } from '@/widgets/alerts';
import { AuthModal } from '@/widgets/auth';
import { FooterMobile, FooterModal } from '@/widgets/footer';
import { MovieModal } from '@/widgets/movie';
import { SearchModal } from '@/widgets/search';

export const Modals = () => {
  return (
    <>
      <AuthModal />
      <RatingModal />
      <SearchModal />
      <MovieModal />
      <FooterModal />
      <UnsubscribeModal />
      <AlertList />
      <FooterMobile />
    </>
  );
};
