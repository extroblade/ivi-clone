import React from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { selectModal, setShowEditProfile } from '@/shared/store';
import { FullScreenModal } from '@/UI';
export const EditProfileModal = () => {
  const { showEditProfile } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(setShowEditProfile(false));
  };
  return (
    <FullScreenModal isOpen={showEditProfile} closeModal={close}>
      <div>nickname</div>
      <div>email</div>
      <div>country</div>
      <div>city</div>
      <div>photo</div>
    </FullScreenModal>
  );
};
