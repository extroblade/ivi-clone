import { Dispatch, SetStateAction, useState } from 'react';

type ReturnType = {
  handleToggle: () => void;
  handleOpen: () => void;
  handleClose: () => void;
  handleState: Dispatch<SetStateAction<boolean>>;
};

export const useBooleanState = (initialState?: boolean): [boolean, ReturnType] => {
  const [state, setState] = useState<boolean>(initialState || false);
  const handleToggle = () => {
    setState((prev) => !prev);
  };
  const handleOpen = () => {
    setState(() => true);
  };
  const handleClose = () => {
    setState(() => false);
  };
  return [state, { handleToggle, handleOpen, handleClose, handleState: setState }];
};
