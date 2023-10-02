import { AlertList } from '@/entities/alert-list';
import { MovieModal } from '@/entities/movie/modal';
import { AuthModal } from '@/features/auth-button';
import { RatingModal } from '@/features/rating-block';
import { SearchModal } from '@/features/search-button';
import { UnsubscribeModal } from '@/features/unsubscribe';
import { FooterMobile } from '@/widgets/footer/mobile/ui/FooterMobile';
import { FooterModal } from '@/widgets/footer/modal';

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
