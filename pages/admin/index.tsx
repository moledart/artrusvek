import React, { useState, useEffect } from 'react';
//Firebase
import { auth } from '../../firebase-config';
import { Auth, User } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
//Components
import Login from '../../components/Login';

const Admin = () => {
  //User and logout
  const [user, setUser] = useState<User>();
  // const handleLogin = (auth: Auth, email: string, password: string) => {
  //   if (!email || !password) return;
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential.user);
  //       setUser(userCredential.user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // };
  const handleLogout = () => {
    auth.signOut();
  };

  if (!user) return <Login setUser={setUser} />;

  return (
    <>
      Вы вошллии
      {/* <section className="">
        <div className="section_header">
          <h1>Добрый день, {'user.name'}!</h1>
          <button onClick={handleLogout} className="logout">
            Выйти
          </button>
        </div>
        <div className="cms_content"></div>
      </section> */}
    </>
  );
};

export default Admin;
