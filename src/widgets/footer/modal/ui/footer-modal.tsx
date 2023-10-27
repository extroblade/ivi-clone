import cn from 'classnames';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { BiDevices, BiInfoCircle, BiMessageAlt } from 'react-icons/bi';
import { BsCameraReels } from 'react-icons/bs';
import { CgPhone } from 'react-icons/cg';
import { FaLinkedinIn, FaOdnoklassniki, FaTelegramPlane, FaTwitter, FaVk } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';
import { HiPhone } from 'react-icons/hi2';
import { IoMailOutline, IoTv, IoTvOutline } from 'react-icons/io5';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { SlDiamond } from 'react-icons/sl';
import { TbDeviceTv, TbTractor } from 'react-icons/tb';

import { useAppDispatch, useAppSelector, useEscapeKey, usePreventScroll } from '@/shared/hooks';
import { selectModal, setShowFooterModal } from '@/shared/store';
import { Button, Text } from '@/shared/ui';

import { ModalList } from '../list';
import styles from './footer-modal.module.scss';

export const FooterModal = () => {
  const { t } = useTranslation();
  const { showFooterModal } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  usePreventScroll(showFooterModal);
  const handleClose = () => {
    dispatch(setShowFooterModal(false));
  };
  useEscapeKey(handleClose);
  if (!showFooterModal) return <></>;
  return (
    <>
      <div className={styles.modal}>
        <div className={cn(styles.menuItem, styles.buttons)}>
          <Button size={'L'} className={cn(styles.button_subscribe, styles.button)}>
            <SlDiamond />
            {t('buttons.get-subscription')}
          </Button>
          <Button size={'L'} className={styles.button}>
            <FiAward />
            {t('footer.cert')}
          </Button>
        </div>
        <div className={styles.menuItem}>
          <Link href={'#'} className={styles.link}>
            {t('sections.my-ivi')}
          </Link>
          <Link href={'#'} className={styles.link}>
            {t('sections.whats-new')}
          </Link>
          <ModalList
            href={'movies'}
            title={t('sections.movies')}
            icon={BsCameraReels}
            isFilms={true}
          />
          <ModalList
            href={'series'}
            title={t('sections.series')}
            icon={MdOutlineVideoLibrary}
            isFilms={true}
          />
          <ModalList
            href={'animation'}
            title={t('sections.animation')}
            icon={TbTractor}
            isFilms={true}
          />
          <ModalList title={'TV+'} icon={IoTvOutline}>
            <div className={styles.list}>
              <p>{t('categories.tv-online')}</p>
              <Link href={'https://www.ivi.ru/tvplus#'} className={styles.listLink}>
                {t('categories.tv-channels')}
              </Link>
              <Link href={'https://www.ivi.ru/tvplus/razvlekatelnoe'} className={styles.listLink}>
                {t('categories.entertainment')}
              </Link>
              <Link href={'https://www.ivi.ru/tvplus/deti'} className={styles.listLink}>
                {t('categories.children')}
              </Link>
              <Link href={'https://www.ivi.ru/tvplus/sport'} className={styles.listLink}>
                {t('categories.sport-tv')}
              </Link>
              <Link href={'https://www.ivi.ru/tvplus/documentalnoe'} className={styles.listLink}>
                {t('categories.documentary')}
              </Link>
            </div>
          </ModalList>
          <Link href={'https://www.ivi.ru/goodmovies'} className={styles.link}>
            {t('categories.what-to-watch')}
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link href={'#'} className={styles.link}>
            {t('categories.ivi-rating-movies')}
          </Link>
          <Link href={'#'} className={styles.link}>
            {t('categories.ivi-rating-series')}
          </Link>
        </div>
        <div className={styles.menuItem}>
          <ModalList title={t('footer.about-us')} icon={BiInfoCircle}>
            <div className={styles.list}>
              <Link href={'https://corp.ivi.ru/'} className={styles.listLink}>
                {t('footer.about-company')}
              </Link>
              <Link
                href={'https://corp.ivi.ru/career/#career-vacancy-block'}
                className={styles.listLink}
              >
                {t('footer.vacancies')}
              </Link>
              <Link href={'https://www.ivi.ru/pages/beta/'} className={styles.listLink}>
                {t('footer.beta')}
              </Link>
              <Link href={'https://www.ivi.ru/info/partners'} className={styles.listLink}>
                {t('footer.partners')}
              </Link>
              <Link href={'https://corp.ivi.ru/advertisers/'} className={styles.listLink}>
                {t('footer.advertisers')}
              </Link>
              <Link href={'https://www.ivi.ru/info/agreement'} className={styles.listLink}>
                {t('footer.agreement')}
              </Link>
              <Link href={'https://www.ivi.ru/info/confidential'} className={styles.listLink}>
                {t('footer.confidential')}
              </Link>
              <Link
                href={'https://www.ivi.ru/info/goryachaya-liniya-komplaens'}
                className={styles.listLink}
              >
                {t('footer.compliance')}
              </Link>
            </div>
          </ModalList>
          <Link href={'#'} className={cn(styles.link, styles.flex)}>
            <TbDeviceTv />
            {t('buttons.code-login')}
          </Link>
          <div className={styles.buttons}>
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
        </div>
        <div className={styles.menuItem}>
          <ModalList title={t('footer.support')} icon={BiMessageAlt}>
            <div className={styles.list}>
              <div>
                <Text>{t('footer.ready-to-help')}</Text>
                <Text>{t('footer.anytime')}</Text>
              </div>
              <div className={cn(styles.flex, styles.feedbackButtons)}>
                <Link href={'https://www.ivi.ru/profile'}>
                  <Button className={styles.button}>{t('footer.chat-us')}</Button>
                </Link>
                <Button appearance={'square'}>
                  <IoMailOutline />
                </Button>
                <Button appearance={'square'}>
                  <HiPhone />
                </Button>
              </div>
              <div>
                <Link href={'https://ask.ivi.ru/'}>ask.ivi.ru</Link>
                <Text>{t('footer.answers')}</Text>
              </div>
            </div>
          </ModalList>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.social}>
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
          <div>
            <Text> © 2023 ООО «Иви.ру»</Text>
            <Text>HBO ® and related service marks are the property of Home Box Office, Inc</Text>
          </div>
        </div>
      </div>
    </>
  );
};
