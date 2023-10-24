import cn from 'classnames';
import { MdArrowBackIosNew } from 'react-icons/md';

import { Button } from '@/shared/ui';

import styles from './arrows.module.scss';

export const PromoPrevArrow = ({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div onClick={onClick} className={styles.arrow_container}>
      <div className={cn(styles.arrow, styles.prev_arrow)}>
        <Button
          size={'L'}
          appearance={'transparent'}
          disabled={className?.split(' ')[2] === 'slick-disabled'}
        >
          <MdArrowBackIosNew size={30} />
        </Button>
      </div>
      <div className={cn(styles.banner, styles.prev_banner)} />
    </div>
  );
};
