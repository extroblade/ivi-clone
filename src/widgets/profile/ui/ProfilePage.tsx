import cn from 'classnames';
import { useSession } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';

import { AuthButton } from '@/features/auth-button';
import { LogoutButton } from '@/features/logout-button';
import {
  BalanceButton,
  CertificatesButton,
  ChecksButton,
  CodeLoginButton,
  InviteFriendsButton,
  NotificationsButton,
  PaymentButton,
  PresentSubscriptionButton,
  PurchasesButton,
  SettingsButton,
  SubscriptionsButton,
  SupportButton,
  ViewedButton,
  WatchLaterButton,
} from '@/features/profile-interactions/buttons';
import {
  ProfileButtonProps,
  ProfileButtonVariants,
} from '@/features/profile-interactions/model/props';
import { SelectProfile } from '@/features/select-profile';
import { Text } from '@/newui';

import styles from './ProfilePage.module.scss';

type listProps = {
  className: string;
  component: FC<ProfileButtonProps>;
  type?: ProfileButtonVariants;
};

export const ProfilePage = () => {
  const { data: session } = useSession();
  const [uuid, setUuid] = useState('');
  useEffect(() => {
    const id = localStorage?.getItem('uuid');
    if (!id) {
      return;
    }

    setUuid(() => localStorage?.getItem('uuid') || '2131212312');
  }, []);
  const smalls: listProps[] = [
    //placing outside of component throws a hydration error
    PurchasesButton,
    WatchLaterButton,
    ViewedButton,
    PaymentButton,
    CodeLoginButton,
    SettingsButton,
    SupportButton,
    ChecksButton,
  ].map((item) => ({
    component: item,
    className: 'smalls',
  }));

  const list: listProps[][] = [
    [
      {
        className: 'subscription',
        component: SubscriptionsButton,
      },
      {
        className: 'certificate',
        component: CertificatesButton,
        type: 'rect_text',
      },
      {
        className: 'fund',
        component: BalanceButton,
      },
    ],
    [
      {
        className: 'subscription_present',
        component: PresentSubscriptionButton,
        type: 'rect_icon_light',
      },
    ],
    [
      {
        className: 'referral_program',
        component: InviteFriendsButton,
      },
      {
        className: 'notifications',
        component: NotificationsButton,
      },
    ],
    smalls,
  ];
  return (
    <div className={styles.profile__btns}>
      {session?.user ? (
        <div className={styles.select_profile}>
          <div className={styles.select_container}>
            <SelectProfile />
          </div>
        </div>
      ) : (
        <div className={styles.login_button}>
          <AuthButton />
        </div>
      )}
      {list.map((list, outer) => (
        <ul key={outer} className={styles.list}>
          {list.map(({ component: Component, className, type }, index) => (
            <li key={index} className={cn(styles.list__item, styles?.[className])}>
              {Component && <Component type={type} />}
            </li>
          ))}
        </ul>
      ))}

      <div className={styles.bottom}>
        <LogoutButton />
        <div className={styles.id}>
          <Text>uid: {uuid}</Text>
        </div>
      </div>
    </div>
  );
};
