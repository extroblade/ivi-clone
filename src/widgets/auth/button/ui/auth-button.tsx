import { useTranslation } from 'react-i18next';
import { TiUserOutline } from 'react-icons/ti';
import { useAuthModalStore } from 'src/widgets/auth/model';

import { Button } from '@/newui';

import styles from './auth-button.module.scss';

export const AuthButton = () => {
  const { t } = useTranslation();

  const handleState = useAuthModalStore((state) => state.handleState);
  return (
    <div className={styles.login} data-testid={'login-button'}>
      <Button
        onClick={() => handleState(true)}
        appearance={'red'}
        title={t('buttons.login-signup') || 'Войти или зарегистрироваться'}
      >
        <TiUserOutline />
        {t('buttons.login-signup')}
      </Button>
    </div>
  );
};
