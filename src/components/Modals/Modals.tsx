import React from 'react';

import { RatingModal, UnsubscribeModal, WatchPageModal } from '@/components';
import { AlertList } from '@/entities/alert-list';
import { AuthModal } from '@/features/auth-button';
import { SearchModal } from '@/features/search-button';
import { FooterModal } from '@/widgets/footer/modal';

export const Modals = () => {
  return (
    <>
      <AuthModal />
      <RatingModal />
      <SearchModal />
      <WatchPageModal />
      <FooterModal />
      <UnsubscribeModal />
      <AlertList />
    </>
  );
};
