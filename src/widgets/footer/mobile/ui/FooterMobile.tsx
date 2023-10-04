import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BiSearch } from 'react-icons/bi';
import { HiDotsHorizontal } from 'react-icons/hi';
import { HiOutlineFolder } from 'react-icons/hi2';
import { IoCloseOutline, IoTvOutline } from 'react-icons/io5';
import { RiHome6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { selectModal, setShowFooterModal, setShowSearch } from '@/shared/store';
import { FooterLink } from '@/widgets/footer/mobile/footer-link/ui/FooterLink';

import styles from './FooterMobile.module.scss';

export const FooterMobile: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { showSearch, showFooterModal } = useSelector(selectModal);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(setShowFooterModal(!showFooterModal));
  };
  const handleOpen = () => {
    dispatch(setShowFooterModal(false));
    dispatch(setShowSearch(!showSearch));
  };
  return (
    <footer className={styles.footerMobile}>
      <div className={styles.menu}>
        <Link href={'/'} className={styles.link}>
          <FooterLink title={t('sections.my-ivi')} href={'/'} icon={RiHome6Line} />
        </Link>
        <Link href={'/movies'} className={styles.link}>
          <FooterLink title={t('sections.catalog')} href={'/movies'} icon={HiOutlineFolder} />
        </Link>
        <FooterLink
          title={t('sections.search')}
          href={showSearch ? '' : '?search'}
          icon={BiSearch}
          openModal={handleOpen}
        />
        <Link href={'https://www.ivi.ru/tvplus'} className={styles.link}>
          <FooterLink title={'TV+'} href={'https://www.ivi.ru/tvplus'} icon={IoTvOutline} />
        </Link>
        <FooterLink
          title={showFooterModal ? t('footer.close-btn') : t('footer.open-btn')}
          href={showFooterModal ? '' : '?navigation'}
          openModal={handleToggle}
          icon={showFooterModal ? IoCloseOutline : HiDotsHorizontal}
        />
      </div>
    </footer>
  );
};
