import cn from 'classnames';
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

import { Button, Text } from '@/newui';

import { defaultFooterLinks } from '../model/links';
import styles from './footer.module.scss';

export const Footer: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__container}>
          {Object.entries(defaultFooterLinks).map(([title, links], index) => (
            <ul key={index} className={styles.list}>
              <span className={styles.listTitle}>{t(title)}</span>
              {links.map(({ href, title, style }, index) => (
                <li className={styles.link} key={index}>
                  <Link className={cn(style && styles[style])} href={href}>
                    {t(title)}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <ul className={styles.list}>
            <span className={styles.listTitle}>{t('footer.support')}</span>
            <li>
              <Text>{t('footer.ready-to-help')}</Text>
              <Text>{t('footer.anytime')}</Text>
            </li>
            <li className={styles.buttonsGroup}>
              <Button>{t('footer.chat-us')}</Button>

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
              <Link href={'https://www.ivi.ru/subscribe?redirect_url=%2Fwatch%2F145146%2Fsimilar'}>
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
              <Link href={'#'}>
                <Button className={styles.button_height} title={'AppStore'}>
                  <FaApple />
                  <div>
                    <span>{t('footer.download')}</span>
                    App Store
                  </div>
                </Button>
              </Link>
              <Link href={'#'}>
                <Button className={styles.button_height} title={'GooglePlay'}>
                  <FaGooglePlay />
                  <div>
                    <span>{t('footer.available')}</span>
                    Google Play
                  </div>
                </Button>
              </Link>
              <Link href={'#'}>
                <Button className={styles.button_height} title={'TV'}>
                  <IoTv />
                  <div>
                    <span>{t('footer.watch-on')}</span>
                    Smart TV
                  </div>
                </Button>
              </Link>
              <Link href={'#'}>
                <Button className={styles.button_height} title={'Все устройства'}>
                  <BiDevices />
                  {t('footer.all-devices')}
                </Button>
              </Link>
            </div>
            <div className={styles.flex}>
              <Link href={'https://vk.ru/extroblade'}>
                <Button title={'vk.ru'} appearance={'circle'}>
                  <FaVk />
                </Button>
              </Link>
              <Link href={'https://ok.ru'}>
                <Button title={'ok.ru'} appearance={'circle'}>
                  <FaOdnoklassniki />
                </Button>
              </Link>
              <Link href={'https://twitter.com'}>
                <Button title={'twitter.com'} appearance={'circle'}>
                  <FaTwitter />
                </Button>
              </Link>
              <Button appearance={'circle'}>
                <CgPhone />
              </Button>
              <Link href={'https://linkedin.com/in/extroblade'}>
                <Button title={'linkedin.com'} appearance={'circle'}>
                  <FaLinkedinIn />
                </Button>
              </Link>
              <Link href={'https://t.me/extroblade'}>
                <Button title={'telegram'} appearance={'circle'}>
                  <FaTelegramPlane />
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Text>© 2023 ООО «Иви.ру» </Text>
            <Text>HBO ® and related service marks are the property of Home Box Office, Inc</Text>
          </div>
        </div>
      </div>
    </footer>
  );
};
