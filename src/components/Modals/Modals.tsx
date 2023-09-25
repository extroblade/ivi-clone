import React from 'react';

import {
  AuthModal,
  FooterModal,
  RatingModal,
  SearchModal,
  UnsubscribeModal,
  WatchPageModal,
} from '@/components';
import { AlertList } from '@/entities/alert-list';

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
