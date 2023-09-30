import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { Button } from '@/newui';
import { setShowRating } from '@/shared/store';

export const RateButton = () => {
  const dispatch = useDispatch();
  const openRatingModal = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    dispatch(setShowRating(true));
  };
  return (
    <Button appearance={'square'} onClick={openRatingModal}>
      <AiOutlineStar />
    </Button>
  );
};
