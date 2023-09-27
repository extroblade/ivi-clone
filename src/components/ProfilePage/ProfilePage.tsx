import { useSession } from 'next-auth/react';

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
} from '@/components';
import { AuthButton } from '@/features/auth-button';
import { LogoutButton } from '@/features/logout-button';
import { SelectProfile } from '@/features/select-profile';
import { Text } from '@/newui';

import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const { data: session } = useSession();
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
      <ul className={styles.list}>
        <li className={`${styles.list__item} ${styles.subscription}`}>
          <SubscriptionsButton />
        </li>
        <li className={`${styles.list__item} ${styles.certificate}`}>
          <CertificatesButton type={'rect_text'} />
        </li>
        <li className={`${styles.list__item} ${styles.fund}`}>
          <BalanceButton />
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={`${styles.list__item} ${styles.subscription_present}`}>
          <PresentSubscriptionButton type={'rect_icon_light'} />
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={`${styles.list__item} ${styles.referral_program}`}>
          <InviteFriendsButton />
        </li>
        <li className={`${styles.list__item} ${styles.notifications}`}>
          <NotificationsButton />
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <PurchasesButton />
        </li>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <WatchLaterButton />
        </li>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <ViewedButton />
        </li>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <PaymentButton />
        </li>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <CodeLoginButton />
        </li>
        {session?.user && (
          <li className={`${styles.list__item} ${styles.smalls}`}>
            <ChecksButton />
          </li>
        )}
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <SettingsButton />
        </li>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <SupportButton />
        </li>
      </ul>
      <div className={styles.bottom}>
        {session?.user && <LogoutButton />}
        <div className={styles.id}>
          <Text>uid: 2049522430</Text>
        </div>
      </div>
    </div>
  );
};
