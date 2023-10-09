import { FC, MouseEvent } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { Button } from '@/newui';
import { AppearanceVariants } from '@/newui/button/button.props';
import { setShowRating } from '@/shared/store';

export const RateButton: FC<{ appearance?: AppearanceVariants }> = ({
  appearance = 'transparent',
}) => {
  const dispatch = useDispatch();
  const handleOpenRatingModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setShowRating(true));
  };
  return (
    <Button appearance={appearance} onClick={handleOpenRatingModal}>
      <AiOutlineStar />
    </Button>
  );
};
