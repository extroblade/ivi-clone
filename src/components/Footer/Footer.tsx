import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BiDevices } from 'react-icons/bi';
import { CgPhone } from 'react-icons/cg';
import {
  FaApple,
  FaGooglePlay,
  FaLinkedinIn,
  FaOdnoklassniki,
  FaTelegramPlane,
  FaTwitter,
  FaVk,
} from 'react-icons/fa';
import { HiOutlineMegaphone, HiPhone } from 'react-icons/hi2';
import { IoMailOutline, IoTv } from 'react-icons/io5';

import { FooterMobile } from '@/components';
import { Button, Text } from '@/newui';

import styles from './Footer.module.scss';

export const Footer: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const first_links = [
    {
      href: 'https://corp.ivi.ru/',
      title: t('footer.about-company'),
    },
    {
      href: 'https://corp.ivi.ru/career/#career-vacancy-block',
      title: t('footer.vacancies'),
    },
    {
      href: 'https://www.ivi.ru/pages/beta/',
      title: t('footer.beta'),
    },
    {
      href: 'https://www.ivi.ru/info/partners',
      title: t('footer.partners'),
    },
    {
      href: 'https://corp.ivi.ru/advertisers/',
      title: t('footer.advertisers'),
    },
    {
      href: 'https://www.ivi.ru/info/agreement',
      title: t('footer.agreement'),
    },
    {
      href: 'https://www.ivi.ru/info/confidential',
      title: t('footer.confidential'),
    },
    {
      href: 'https://www.ivi.ru/info/goryachaya-liniya-komplaens',
      title: t('footer.compliance'),
    },
  ];
  const second_links = [
    {
      href: '/',
      title: t('sections.my-ivi'),
    },
    {
      href: 'https://www.ivi.ru/new',
      title: t('sections.whats-new'),
    },
    {
      href: '/movies',
      title: t('sections.movies'),
    },
    {
      href: '/series',
      title: t('sections.series'),
    },
    {
      href: '/animation',
      title: t('sections.animation'),
    },
    {
      href: 'https://www.ivi.ru/tvplus',
      title: t('sections.tv-plus'),
    },
    {
      href: 'https://www.ivi.ru/goodmovies',
      title: t('sections.good-movies'),
    },
  ];
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__container}>
            <ul className={styles.list}>
              <span className={styles.listTitle}>{t('footer.about-us')}</span>
              {first_links.map((link, index) => (
                <li className={styles.link} key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              <span className={styles.listTitle}>{t('footer.sections')}</span>
              {second_links.map((link, index) => (
                <li className={styles.link} key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
              <li className={styles.link}>
                <Link href={'https://www.ivi.ru/cert'} className={styles.certLink}>
                  {t('footer.cert')}
                </Link>
              </li>
            </ul>
            <ul className={styles.list}>
              <span className={styles.listTitle}>{t('footer.support')}</span>
              <li>
                <Text>{t('footer.ready-to-help')}</Text>
                <Text>{t('footer.anytime')}</Text>
              </li>
              <li className={styles.buttonsGroup}>
                <Link href={'https://www.ivi.ru/profile'}>
                  <Button className={styles.button}>{t('footer.chat-us')}</Button>
                </Link>
                <Button appearance={'square'}>
                  <IoMailOutline />
                </Button>
                <Button appearance={'square'}>
                  <HiPhone />
                </Button>
              </li>
              <li>
                <Link href={'https://ask.ivi.ru/'} className={styles.askLink}>
                  ask.ivi.ru
                </Link>
                <Text>{t('footer.answers')}</Text>
              </li>
            </ul>
            <ul className={styles.list}>
              <li>
                <Link
                  href={'https://www.ivi.ru/subscribe?redirect_url=%2Fwatch%2F145146%2Fsimilar'}
                >
                  <div className={styles.widget}>
                    <HiOutlineMegaphone className={styles.widget__icon} />
                  </div>
                  <Text className={styles.widget__descr}>{t('footer.watch')}</Text>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.flex}>
              <div className={styles.flex}>
                <Button>
                  <FaApple />
                  <div>
                    <span>{t('footer.download')}</span>
                    App Store
                  </div>
                </Button>
                <Button>
                  <FaGooglePlay />
                  <div>
                    <span>{t('footer.available')}</span>
                    Google Play
                  </div>
                </Button>
                <Button>
                  <IoTv />
                  <div>
                    <span>{t('footer.watch-on')}</span>
                    Smart TV
                  </div>
                </Button>
                <Button>
                  <BiDevices />
                  {t('footer.all-devices')}
                </Button>
              </div>
              <div className={styles.flex}>
                <Button appearance={'circle'}>
                  <FaVk />
                </Button>
                <Button appearance={'circle'}>
                  <FaOdnoklassniki />
                </Button>
                <Button appearance={'circle'}>
                  <FaTwitter />
                </Button>
                <Button appearance={'circle'}>
                  <CgPhone />
                </Button>
                <Button appearance={'circle'}>
                  <FaLinkedinIn />
                </Button>
                <Button appearance={'circle'}>
                  <FaTelegramPlane />
                </Button>
              </div>
            </div>
            <div>
              <Text>© 2023 ООО «Иви.ру» </Text>
              <Text>HBO ® and related service marks are the property of Home Box Office, Inc</Text>
            </div>
          </div>
        </div>
      </footer>
      <FooterMobile />
    </>
  );
};
