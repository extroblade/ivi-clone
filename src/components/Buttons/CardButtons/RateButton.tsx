import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { Button } from '@/UI/Button/Button';
import { useDispatch } from 'react-redux';
import { setShowRating } from '@/store/reducers/modals.slice';

const RateButton = () => {
  const dispatch = useDispatch();
  const openRatingModal = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    dispatch(setShowRating(true));
  };
  return (
    <Button appearance={'square'} onClick={(e) => openRatingModal(e)}>
      <AiOutlineStar />
    </Button>
  );
};

export default RateButton;
