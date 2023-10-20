import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

import { Button, Text, Title } from '@/shared/ui';

import { defaultFooterLinks } from '../model/links';
import styles from './footer.module.scss';

export const Footer: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__container}>
          {Object.entries(defaultFooterLinks).map(([title, links], index) => (
            <ul key={index} className={styles.list}>
              <Title tag={'h4'}>{t(title)}</Title>
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
            <Title tag={'h4'}>{t('footer.support')}</Title>
            <li>
              <Text>{t('footer.ready-to-help')}</Text>
              <Text>{t('footer.anytime')}</Text>
            </li>
            <li className={styles.buttons_group}>
              <Button size={'M'}>{t('footer.chat-us')}</Button>

              <Button size={'M'} appearance={'square'}>
                <IoMailOutline />
              </Button>
              <Button size={'M'} appearance={'square'}>
                <HiPhone />
              </Button>
            </li>
            <li>
              <Link href={'https://ask.ivi.ru/'} className={styles.ask_link}>
                ask.ivi.ru
              </Link>
              <Text>{t('footer.answers')}</Text>
            </li>
          </ul>
          <div className={styles.list}>
            <Link href={'https://www.ivi.ru/subscribe'}>
              <div className={styles.widget}>
                <HiOutlineMegaphone />
              </div>
              <Text className={styles.description}>{t('footer.watch')}</Text>
            </Link>
          </div>
        </div>
        <div className={styles.footer_item}>
          <div className={styles.flex}>
            <div className={styles.flex}>
              <Button size={'M'} title={'AppStore'}>
                <FaApple />
                <div className={styles.button_text}>
                  <span>{t('footer.download')}</span>
                  App Store
                </div>
              </Button>
              <Button size={'M'} title={'GooglePlay'}>
                <FaGooglePlay />
                <div className={styles.button_text}>
                  <span>{t('footer.available')}</span>
                  Google Play
                </div>
              </Button>
              <Button size={'M'} title={'TV'}>
                <IoTv />
                <div className={styles.button_text}>
                  <span>{t('footer.watch-on')}</span>
                  Smart TV
                </div>
              </Button>
              <Button size={'M'} title={'Все устройства'}>
                <BiDevices />
                {t('footer.all-devices')}
              </Button>
            </div>
            <div className={styles.flex}>
              <Button
                onClick={() => router.push('https://vk.ru/extroblade')}
                size={'M'}
                title={'vk.ru'}
                appearance={'circle'}
              >
                <FaVk />
              </Button>
              <Button
                onClick={() => router.push('https://ok.ru')}
                size={'M'}
                title={'ok.ru'}
                appearance={'circle'}
              >
                <FaOdnoklassniki />
              </Button>
              <Button
                onClick={() => router.push('https://twitter.com')}
                size={'M'}
                title={'twitter.com'}
                appearance={'circle'}
              >
                <FaTwitter />
              </Button>
              <Button appearance={'circle'}>
                <CgPhone />
              </Button>
              <Button
                onClick={() => router.push('https://linkedin.com/in/extroblade')}
                size={'M'}
                title={'linkedin.com'}
                appearance={'circle'}
              >
                <FaLinkedinIn />
              </Button>
              <Button
                onClick={() => router.push('https://t.me/extroblade')}
                size={'M'}
                title={'telegram'}
                appearance={'circle'}
              >
                <FaTelegramPlane />
              </Button>
            </div>
          </div>
          <Text>© 2023 ООО «Иви.ру» </Text>
          <Text>HBO ® and related service marks are the property of Home Box Office, Inc</Text>
        </div>
      </div>
    </footer>
  );
};
