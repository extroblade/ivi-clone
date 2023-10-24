import cn from 'classnames';
import { MdArrowForwardIos } from 'react-icons/md';

import { Button } from '@/shared/ui';

import styles from './arrows.module.scss';

export const PromoNextArrow = ({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div onClick={onClick} className={styles.arrow_container}>
      <div className={cn(styles.arrow, styles.next_arrow)}>
        <Button
          size={'L'}
          appearance={'transparent'}
          disabled={className?.split(' ')[2] === 'slick-disabled'}
        >
          <MdArrowForwardIos size={30} />
        </Button>
      </div>
      <div className={cn(styles.banner, styles.next_banner)} />
    </div>
  );
};
