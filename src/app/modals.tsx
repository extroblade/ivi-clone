import { MovieModal } from '@/entities/movie';
import { RatingModal } from '@/features/rating-block';
import { SearchModal } from '@/features/search-button';
import { UnsubscribeModal } from '@/features/unsubscribe';
import { AlertList } from '@/widgets/alerts';
import { AuthModal } from '@/widgets/auth';
import { FooterMobile, FooterModal } from '@/widgets/footer';

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
