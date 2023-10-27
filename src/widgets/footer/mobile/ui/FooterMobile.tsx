import { useTranslation } from 'react-i18next';
import { BiSearch } from 'react-icons/bi';
import { HiDotsHorizontal } from 'react-icons/hi';
import { HiOutlineFolder } from 'react-icons/hi2';
import { IoCloseOutline, IoTvOutline } from 'react-icons/io5';
import { RiHome6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { selectModal, setShowFooterModal, setShowSearch } from '@/shared/store';

import { FooterLink } from '../footer-link';
import styles from './FooterMobile.module.scss';

export const FooterMobile = () => {
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
        <FooterLink title={t('sections.my-ivi')} href={'/'} icon={RiHome6Line} />
        <FooterLink title={t('sections.catalog')} href={'/movies'} icon={HiOutlineFolder} />

        <FooterLink
          title={t('sections.search')}
          href={showSearch ? '' : '?search'}
          icon={BiSearch}
          openModal={handleOpen}
        />
        <FooterLink title={'TV+'} href={'https://www.ivi.ru/tvplus'} icon={IoTvOutline} />
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
