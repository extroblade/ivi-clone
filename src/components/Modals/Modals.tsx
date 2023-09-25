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
import { AlertList } from '@/entities/alert-list';

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
      <AlertList />
    </>
  );
};
