import React from 'react';

import {
  AuthModal,
  EditProfileModal,
  FooterModal,
  RatingModal,
  SearchModal,
  UnsubscribeModal,
  WatchPageModal,
} from '@/components';
import { AlertsList } from '@/UI';

export const Modals = () => {
  return (
    <>
      <AuthModal />
      <RatingModal />
      <SearchModal />
      <WatchPageModal />
      <EditProfileModal />
      <FooterModal />
      <UnsubscribeModal />
      <AlertsList />
    </>
  );
};
