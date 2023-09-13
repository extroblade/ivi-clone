import React, { FC, JSX } from 'react';

import { Button } from '@/UI';
import { ICardButtons } from '@/UI/Profile/ProfileButton/ProfileButtons.props';

import styles from './ProfileButton.module.scss';

const ProfileButton: FC<ICardButtons> = ({ type, icon, children, onClick }) => {
  const IconComponent: JSX.Element = icon;
  switch (type) {
    case 'square_icon':
      return (
        <Button className={styles.square__icon} onClick={() => onClick && onClick()}>
          <div>
            <IconComponent />
          </div>
          <div>{children}</div>
        </Button>
      );
    case 'rect_icon':
      return (
        <Button className={styles.rect__icon} onClick={() => onClick && onClick()}>
          <div>
            <IconComponent />
          </div>
          {children}
        </Button>
      );
    case 'rect_icon_light':
      return (
        <Button className={styles.rect__icon__light} onClick={() => onClick && onClick()}>
          <div>
            <IconComponent />
          </div>
          {children}
        </Button>
      );
    case 'rect_icon_purple':
      return (
        <Button className={styles.rect__icon__purple} onClick={() => onClick && onClick()}>
          <div>
            <IconComponent />
          </div>
          {children}
        </Button>
      );
    case 'rect_text':
      return (
        <Button className={styles.rect__text} onClick={() => onClick && onClick()}>
          {children}
        </Button>
      );
    default:
      return <></>;
  }
};

export default ProfileButton;
