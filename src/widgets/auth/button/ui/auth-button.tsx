import { useTranslation } from 'react-i18next';
import { TiUserOutline } from 'react-icons/ti';
import { useAuthModalStore } from 'src/widgets/auth/model';

import { Button } from '@/shared/ui';

import styles from './auth-button.module.scss';

export const AuthButton = () => {
  const { t } = useTranslation();

  const handleState = useAuthModalStore((state) => state.handleState);
  return (
    <div className={styles.login} data-testid={'login-button'}>
      <Button onClick={() => handleState(true)} appearance={'red'}>
        <TiUserOutline />
        {t('buttons.login-signup')}
      </Button>
    </div>
  );
};
