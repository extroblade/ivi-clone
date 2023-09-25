import { useTranslation } from 'react-i18next';
import { TiUserOutline } from 'react-icons/ti';

import { Button } from '@/newui';
import { useAppDispatch } from '@/shared/hooks';
import { setShowAuth } from '@/shared/store';

import styles from './LoginButton.module.scss';

export const LoginButton = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const openLoginModal = () => {
    dispatch(setShowAuth(true));
  };
  return (
    <div className={styles.login} data-testid={'login-button'}>
      <Button
        onClick={openLoginModal}
        size={'S'}
        appearance={'red'}
        title={t('buttons.login-signup') || 'Войти или зарегистрироваться'}
      >
        <TiUserOutline />
        {t('buttons.login-signup')}
      </Button>
    </div>
  );
};
