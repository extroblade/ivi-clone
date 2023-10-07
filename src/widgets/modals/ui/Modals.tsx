import { MovieModal } from '@/entities/movie/modal';
import { RatingModal } from '@/features/rating-block';
import { SearchModal } from '@/features/search-button';
import { UnsubscribeModal } from '@/features/unsubscribe';
import { AlertList } from '@/widgets/alerts';
import { AuthModal } from '@/widgets/auth';
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
