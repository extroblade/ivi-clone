import React from 'react';
import RatingModal from '@/components/Modals/RatingModal/RatingModal';
import SearchModal from '@/components/Modals/SearchModal/SearchModal';
import WatchPageModal from '@/components/Modals/WatchPageModal/WatchPageModal';
import FooterModal from '@/components/Footer/FooterModal/FooterModal';
import AuthModal from '@/components/Modals/AuthModal/AuthModal';
import EditProfileModal from '@/components/Profile/EditProfileModal/EditProfileModal';
import UnsubscribeModal from '@/components/Modals/UnsubscribeModal/UnsubscribeModal';
import Alerts from '@/UI/Alert/AlertsList';

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
      <Alerts />
    </>
  );
};

export default Modals;
