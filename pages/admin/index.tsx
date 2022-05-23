import React, { useState, useEffect } from 'react';
//Firebase
import { auth } from '../../firebase-config';
import { Auth, onAuthStateChanged, User } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { PlusIcon } from '@heroicons/react/solid';
//Components
import Login from '../../components/cms/Login';
import Plate from '../../components/cms/Plate';
import Form from '../../components/cms/Form';

const Admin = () => {
  //User and logout
  const [admin, setAdmin] = useState<User>();
  const [category, setCategory] = useState('plays');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAdmin(user);
    } else {
      setAdmin(undefined);
    }
  });

  const handleLogout = () => {
    auth.signOut();
  };

  if (!admin) return <Login setAdmin={setAdmin} />;

  return (
    <section className="px-5 pt-12 pb-24">
      <div className="flex mb-10">
        <h1 className="text-3xl font-bold ">Добро пожаловать, Татьяна!</h1>
        <button
          className="px-4 bg-zinc-700 rounded-sm ml-4 hover:bg-zinc-600 basic-animation text-sm"
          onClick={handleLogout}
        >
          Выйти
        </button>
      </div>
      <div className="grid grid-cols-3 gap-16">
        <div className="panel">
          <h2>Коллекция</h2>
          <ul>
            <li
              className={category === 'plays' ? 'bg-zinc-800' : ''}
              onClick={() => setCategory('plays')}
            >
              Спектакли
            </li>
            <li
              className={category === 'actors' ? 'bg-zinc-800' : ''}
              onClick={() => setCategory('actors')}
            >
              Актеры
            </li>
            <li
              className={category === 'news' ? 'bg-zinc-800' : ''}
              onClick={() => setCategory('news')}
            >
              Новости
            </li>
          </ul>
        </div>
        <div className="panel">
          <div className="flex">
            <h2>Элементы</h2>
            <button className="bg-zinc-700 rounded-sm ml-4 hover:bg-zinc-600 basic-animation text-sm flex items-center gap-1 px-4">
              <PlusIcon className="w-5" />
              Добавить
            </button>
          </div>
          <ul>
            <Plate active />
            <Plate />
          </ul>
        </div>
        <div className="panel">
          <h2>Содержание элемента</h2>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Admin;
