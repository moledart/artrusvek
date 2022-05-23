import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase-config';
import { selectUser } from '../../reducers/userSlice';
import { login, logout } from '../../reducers/userSlice';
import { signInWithEmailAndPassword, User, AuthError } from 'firebase/auth';
import { useDispatch } from 'react-redux';

interface LoginProps {
  // handleLogin: (auth: Auth, email: string, password: string) => void;
  setAdmin: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const Login = ({ setAdmin }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAdmin(userCredential.user);
      })
      .catch((error: AuthError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + ': ' + errorMessage);
      });
  };

  return (
    <form
      className="flex flex-col px-5 w-full self-center max-w-md my-auto"
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <h1 className="text-2xl mb-8 font-bold">Вход в CMS</h1>
      <label htmlFor="email" className="block">
        <span>Email</span>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="@"
          required
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password" className="mt-4 mb-8">
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          id="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input
        type="submit"
        value="Войти"
        className="bg-main text-night rounded-md py-3 hover:bg-mainDark transition-all duration-200 ease-in-out"
      ></input>
      {errorMessage}
    </form>

    // {/* <form action="" onSubmit={handleLogin}>
    //   <h1>Войти</h1>
    //   <input
    //     type="email"
    //     // required="true"
    //     placeholder="Почта"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     // required="true"
    //     placeholder="Пароль"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <input type="submit" className="button_main" value="Войти" />
    // </form> */}
  );
};

export default Login;
