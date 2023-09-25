import React, { useState } from 'react';

import { InputFileButton } from '@/components';
import { Button } from '@/newui';

import styles from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const [username, setUsername] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>();

  const registerHandler = () => {
    const formData = new FormData();
    formData.append('email', login);
    formData.append('password', password);
    formData.append('nickname', username);
    profilePicture && formData.append('photo', profilePicture);
  };
  return (
    <div className={styles.register}>
      <input
        type="text"
        placeholder={'Имя пользователя'}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder={'Электронная почта'}
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder={'Пароль'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputFileButton setSelected={setProfilePicture} />
      <Button onClick={registerHandler}>Регистрация</Button>
    </div>
  );
};
