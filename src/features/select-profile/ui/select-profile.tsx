import cn from 'classnames';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { AiOutlinePlus } from 'react-icons/ai';

import { ProfileIcon } from '../profile-icon';
import styles from './select-profile.module.scss';

export const SelectProfile = () => {
  const { data: session, status } = useSession();
  const { t } = useTranslation();
  return (
    <>
      <div className={cn(styles.row, status === 'loading' && 'loader')}>
        <ProfileIcon
          image={
            session?.user?.image && (
              <Image src={session.user.image} alt="user" width={50} height={50} />
            )
          }
          isActive={true}
          name={session?.user?.name || session?.user?.email || t('sections.profile')}
        />
        <ProfileIcon
          image={<Image src={'/images/children.png'} alt="user" width={40} height={40} />}
          name={t('sections.children')}
        />
        <ProfileIcon image={<AiOutlinePlus />} name={t('buttons.new-one')} />
      </div>
    </>
  );
};
