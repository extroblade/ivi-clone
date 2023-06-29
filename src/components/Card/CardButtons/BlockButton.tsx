import React, { useState } from 'react';
import { MdBlock } from 'react-icons/md';
import { Button } from '@/components/Button/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectModal, setCurrentAlert } from '@/store/reducers/modals.slice';

const BlockButton = () => {
  const [blocked, setBlocked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { currentAlert } = useAppSelector(selectModal);

  const blockMovie = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    if (!blocked) {
      const cur = [];
      const newAlert = {
        title: 'Спасибо за отметку',
        extra: 'Теперь мы будем показывать Вам меньше похожих фильмов',
      };
      if (
        currentAlert?.length ||
        !currentAlert.find((alert) => alert.title == 'Спасибо за отметку')
      ) {
        cur.push(newAlert);
      }
      dispatch(setCurrentAlert(cur));
    }
    setBlocked((blocked) => !blocked);
  };
  return (
    <Button appearance={'square'} onClick={(e) => blockMovie(e)}>
      {blocked ? <MdBlock fill={'#ff542e'} /> : <MdBlock />}
    </Button>
  );
};

export default BlockButton;
