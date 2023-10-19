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

type listProps = {
  className: string;
  component: JSX.Element;
};

export const userList: listProps[][] = [
  [
    {
      className: 'subscription',
      component: <SubscriptionsButton />,
    },
    {
      className: 'certificate',
      component: <CertificatesButton type={'rect_text'} />,
    },
    {
      className: 'fund',
      component: <BalanceButton />,
    },
  ],
  [
    {
      className: 'subscription_present',
      component: <PresentSubscriptionButton type={'rect_icon_light'} />,
    },
  ],
  [
    {
      className: 'referral_program',
      component: <InviteFriendsButton />,
    },
    {
      className: 'notifications',
      component: <NotificationsButton />,
    },
  ],
  [
    { component: <PurchasesButton />, className: 'smalls' },
    { component: <WatchLaterButton />, className: 'smalls' },
    { component: <ViewedButton />, className: 'smalls' },
    { component: <PaymentButton />, className: 'smalls' },
    { component: <CodeLoginButton />, className: 'smalls' },
    { component: <SettingsButton />, className: 'smalls' },
    { component: <ChecksButton />, className: 'smalls' },
    { component: <SupportButton />, className: 'smalls' },
  ],
];

export const guestList: listProps[][] = [
  [
    {
      className: 'subscription',
      component: <SubscriptionsButton />,
    },
    {
      className: 'certificate',
      component: <CertificatesButton type={'rect_text'} />,
    },
    {
      className: 'fund',
      component: <BalanceButton />,
    },
  ],
  [
    {
      className: 'subscription_present',
      component: <PresentSubscriptionButton type={'rect_icon_light'} />,
    },
  ],
  [
    {
      className: 'referral_program',
      component: <InviteFriendsButton />,
    },
    {
      className: 'notifications',
      component: <NotificationsButton />,
    },
  ],
  [
    { component: <PurchasesButton />, className: 'smalls' },
    { component: <WatchLaterButton />, className: 'smalls' },
    { component: <ViewedButton />, className: 'smalls' },
    { component: <PaymentButton />, className: 'smalls' },
    { component: <CodeLoginButton />, className: 'smalls' },
    { component: <SettingsButton />, className: 'smalls' },
    { component: <SupportButton />, className: 'smalls' },
  ],
];
