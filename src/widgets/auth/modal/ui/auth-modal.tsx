import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { TbReload } from 'react-icons/tb';
import { GoogleAuthButton, VkAuthButton } from 'src/widgets/auth/external';
import { useAuthModalStore } from 'src/widgets/auth/model';

import { useBooleanState } from '@/shared/hooks';
import { BarGraph, Button, Modal, Text } from '@/shared/ui';
import { REGEX_EMAIL, REGEX_PASSWORD, STEPS_COUNT } from '@/widgets/auth/modal/model';

import styles from './auth-modal.module.scss';

export const AuthModal = (): JSX.Element => {
  const { t } = useTranslation();
  const router = useRouter();
  const [progress, setProgress] = useState<number>(5);
  const [step, setStep] = useState<number>(1);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, { handleToggle: handlePasswordVisibility }] = useBooleanState();
  const { isOpen, handleState } = useAuthModalStore();

  const { data: session } = useSession();
  const handleClose = () => {
    handleState(false);
    setStep(() => 1);
  };

  const handleLogout = () => {
    signOut().then(async () => {
      await router.push('/profile');
    });
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, STEPS_COUNT));
  };

  const previousStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleAuth = async () => {
    await signIn('credentials', {
      login: login,
      password,
    });
  };

  useEffect(() => {
    switch (step) {
      case 1:
        setProgress(5);
        break;
      case 2:
        setProgress(50);
        break;
      case 3:
        setProgress(75);

        handleAuth().then(() => {
          setProgress(100);
          handleClose();
          setPassword(() => '');
          setLogin(() => '');
        });

        break;
    }
  }, [step]);

  return (
    <Modal isOpen={isOpen} closeModal={handleClose} cross={false}>
      <form className={styles.chat}>
        <div className={styles.chat__header}>
          {step > 1 ? (
            <div className={styles.chat__welcome}>
              <h5 className={styles.chat__title}>{t('sections.hello')}</h5>
              {login && <Text size="S">{login}</Text>}
            </div>
          ) : (
            <div className={styles.chat__welcome}>
              <h5 className={styles.chat__title}>{t('buttons.login-signup')}</h5>
            </div>
          )}
          <div className={styles.chat__close}>
            <CgClose onClick={handleClose} />
          </div>
          <div className={styles.chat__progress}>
            <BarGraph width={progress} />
          </div>
        </div>
        <div className={styles.chat__body}>
          {session ? (
            <div className={styles.chat__message}>
              <h1 onClick={handleLogout} title={'Нажмите, чтобы выйти из аккаунта'}>
                {t('sections.already-signed')}
              </h1>
            </div>
          ) : (
            <>
              <div className={styles.chat__message}>
                <h5>{t('buttons.login-signup-person')}</h5>
                {step <= 1 && <Text>{t('sections.use-service-any-device')}</Text>}
              </div>
              {step === 1 ? (
                <div className={styles.input}>
                  <BiUser className={styles.input__icon} />
                  <input
                    type="text"
                    value={login}
                    onChange={({ target: { value } }) => setLogin(value)}
                    className={!!login ? styles.input__active : ''}
                  />
                  <label>{t('buttons.email-or-phone')}</label>
                </div>
              ) : (
                <div className={styles.chat__row}>
                  <Button appearance={'circle'} onClick={previousStep}>
                    <BsPencil />
                  </Button>
                  <div className={styles.chat__answer}>
                    <h5>{login}</h5>
                  </div>
                </div>
              )}
              {step !== 1 && (
                <>
                  <div className={styles.chat__message}>
                    <h5>
                      {t('buttons.enter-password')} {t('buttons.to-login')}
                    </h5>
                  </div>
                  <div className={`${styles.input} ${styles.password}`}>
                    <input
                      type={isPasswordVisible ? 'text' : 'password'}
                      value={password}
                      required
                      pattern={'\\S+.*'}
                      onChange={({ target: { value } }) => setPassword(value)}
                      className={!!password ? styles.input__active : ''}
                    />
                    <label>{t('buttons.enter-password')}</label>
                    {!isPasswordVisible ? (
                      <AiOutlineEye
                        className={`${styles.input__show} ${
                          !!password && styles.input__showActive
                        }`}
                        onClick={handlePasswordVisibility}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className={`${styles.input__show} ${
                          !!password && styles.input__showActive
                        }`}
                        onClick={handlePasswordVisibility}
                      />
                    )}
                  </div>
                </>
              )}
              <div className={styles.chat__oauth}>
                {step === 1 ? (
                  <Button
                    appearance={'red'}
                    disabled={!login.match(REGEX_EMAIL)}
                    onClick={nextStep}
                  >
                    {t('buttons.continue')}
                  </Button>
                ) : (
                  <Button
                    appearance={'red'}
                    disabled={!password.match(REGEX_PASSWORD)}
                    onClick={nextStep}
                  >
                    {t('buttons.login')}
                  </Button>
                )}
              </div>
              {step === 1 ? (
                <>
                  <div className={styles.chat__oauth}>
                    <GoogleAuthButton />
                    <VkAuthButton />
                  </div>
                  <div className={styles.chat__confidential}>
                    <p>{t('sections.click-continue-agree')}</p>
                    <p>
                      <span>{t('descriptions.with')} </span>
                      <Link
                        href="https://www.ivi.tv/info/confidential"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t('sections.privacy-policy')}
                      </Link>
                    </p>
                    <p>
                      <span>{t('sections.and')} </span>
                      <Link
                        href="https://www.ivi.tv/info/agreement"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t('sections.user-agreement')}
                      </Link>
                    </p>
                  </div>
                </>
              ) : (
                <div className={styles.chat__recover}>
                  <TbReload />
                  <h5>{t('buttons.reset-password')}</h5>
                </div>
              )}
            </>
          )}
        </div>
      </form>
    </Modal>
  );
};
