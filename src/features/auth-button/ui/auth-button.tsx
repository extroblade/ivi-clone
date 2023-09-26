import { useTranslation } from 'react-i18next';
import { TiUserOutline } from 'react-icons/ti';

import { useAuthModal } from '@/features/auth-button/lib';
import { Button } from '@/newui';

import styles from './auth-button.module.scss';

export const AuthButton = () => {
  const { t } = useTranslation();

  const { handleState } = useAuthModal();
  return (
    <div className={styles.login} data-testid={'login-button'}>
      <Button
        onClick={() => handleState(true)}
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
