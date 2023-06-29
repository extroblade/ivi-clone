import React from 'react';
import RatingModal from '@/components/Modals/RatingModal/RatingModal';
import SearchModal from '@/components/Header/Search/SearchModal/SearchModal';
import WatchPageModal from '@/components/Modals/WatchPageModal/WatchPageModal';
import FooterModal from '@/components/Footer/FooterModal/FooterModal';
import AuthModal from '@/components/Auth/AuthModal';
import EditProfileModal from '@/components/Profile/EditProfileModal/EditProfileModal';
import UnsubscribeModal from '@/components/Modals/UnsubscribeModal/UnsubscribeModal';
import Alert from '@/components/Alert/Alert';

const Modals = () => {
  return (
    <>
      <AuthModal />
      <RatingModal />
      <SearchModal />
      <WatchPageModal />
      <EditProfileModal />
      <FooterModal />
      <UnsubscribeModal />
      <Alert />
    </>
  );
};

export default Modals;
