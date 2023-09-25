import React, { FC } from 'react';

import { TitleProps } from '@/newui/title/title.props';
import { Htag } from '@/UI';

import styles from './title.module.scss';

export const Title: FC<TitleProps> = ({ children, ...props }) => {
  return (
    <div className={styles.title} {...props}>
      <Htag tag={'h4'}>{children}</Htag>
    </div>
  );
};
