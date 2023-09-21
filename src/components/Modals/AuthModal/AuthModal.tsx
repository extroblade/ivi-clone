import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { TbReload } from 'react-icons/tb';

import { GoogleAuthButton, VkAuthButton } from '@/components';
import { REGEX_EMAIL, REGEX_PASSWORD } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectModal, setShowAuth } from '@/store';
import { BarGraph, Button, FullScreenModal, P } from '@/UI';

import styles from './AuthModal.module.scss';

export const AuthModal: FC = ({ show = false }: { show?: boolean }): JSX.Element => {
  const { t } = useTranslation();
  const router = useRouter();
  const [progress, setProgress] = useState<number>(5);
  const [step, setStep] = useState<number>(1);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const { showAuth } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const { data: session } = useSession();
  const close = () => {
    dispatch(setShowAuth(false));
    setStep(() => 1);
  };

  const handleLogout = () => {
    signOut().then(() => {
      router.push('/profile');
    });
  };

  const nextStep = () => {
    if (step > 3) {
      return;
    }
    setStep((prev) => prev + 1);
  };

  const previousStep = () => {
    if (step < 1) {
      return;
    }
    setStep((prev) => prev - 1);
  };
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleAuth = () => {
    signIn('credentials', {
      login: login,
      password,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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

        handleAuth();
        setProgress(100);
        close();
        setPassword(() => '');
        setLogin(() => '');
        break;
    }
  }, [step]);

  return (
    <FullScreenModal isOpen={showAuth || show} closeModal={close}>
      <form className={styles.chat}>
        <div className={styles.chat__header}>
          {step > 1 ? (
            <div className={styles.chat__welcome}>
              <h5 className={styles.chat__title}>{t('sections.hello')}</h5>
              {login && <P size="S">{login}</P>}
            </div>
          ) : (
            <div className={styles.chat__welcome}>
              <h5 className={styles.chat__title}>{t('buttons.login-signup')}</h5>
            </div>
          )}
          <div className={styles.chat__close}>
            <CgClose onClick={close} />
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
                {step <= 1 && <P>{t('sections.use-service-any-device')}</P>}
              </div>
              {step === 1 ? (
                <div className={styles.input}>
                  <BiUser className={styles.input__icon} />
                  <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
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
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      required
                      pattern={'\\S+.*'}
                      onChange={(e) => setPassword(e.target.value)}
                      className={!!password ? styles.input__active : ''}
                    />
                    <label>{t('buttons.enter-password')}</label>
                    {!showPassword ? (
                      <AiOutlineEye
                        className={`${styles.input__show} ${
                          !!password && styles.input__showActive
                        }`}
                        onClick={toggleShowPassword}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className={`${styles.input__show} ${
                          !!password && styles.input__showActive
                        }`}
                        onClick={toggleShowPassword}
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
    </FullScreenModal>
  );
};
