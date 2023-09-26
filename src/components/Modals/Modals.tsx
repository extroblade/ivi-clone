import React from 'react';

import {
  FooterModal,
  RatingModal,
  SearchModal,
  UnsubscribeModal,
  WatchPageModal,
} from '@/components';
import { AlertList } from '@/entities/alert-list';
import { AuthModal } from '@/features/auth-button/auth-modal';

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
