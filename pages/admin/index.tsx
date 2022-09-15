import React, { useState, useEffect } from 'react';
//Firebase
import { auth, storage } from '../../firebase-config';
import { Auth, onAuthStateChanged, User } from 'firebase/auth';
import {
  collection,
  doc,
  DocumentData,
  onSnapshot,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { db } from '../../firebase-config';
//Components
import Login from '../../components/cms/Login';
import Plate from '../../components/cms/Plate';
import FormContainer from '../../components/cms/FormContainer';
import { PlusIcon } from '@heroicons/react/solid';
import {
  TCategory,
  TCategoryElement,
  TCategoryElements,
} from '../../types/categories';

const Admin = () => {
  //User and logout
  const [admin, setAdmin] = useState<User>();
  const [category, setCategory] = useState<TCategory>('news');
  const [elements, setElements] = useState<TCategoryElements>([]);
  const [currentElement, setCurrentElement] = useState<TCategoryElement>(elements[0]);
  const [blankForm, setBlankForm] = useState(false);

  onAuthStateChanged(auth, (user) => setAdmin(user ? user : undefined));
  const handleLogout = () => auth.signOut();

  // Getting data from firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, category),
      (snapshot) => {
        const data: any = [];
        snapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setElements(data);
        setCurrentElement(data[0]);
      },
      (error) => {
        console.log(error.message);
      }
    );
    return () => {
      unsubscribe();
    };
  }, [db, category, storage]);

  if (!admin) return <Login setAdmin={setAdmin} />;

  return (
    <section className="px-5 pt-12 pb-24">
      <div className="flex mb-10">
        <h1 className="text-3xl font-bold ">Добро пожаловать, Татьяна!</h1>
        <button
          type="button"
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
            <button
              type="button"
              className="bg-zinc-700 rounded-sm ml-4 hover:bg-zinc-600 basic-animation text-sm flex items-center gap-1 px-4"
              onClick={() => setBlankForm(true)}
            >
              <PlusIcon className="w-5" />
              Добавить
            </button>
          </div>
          <ul>
            {elements.map((el: TCategoryElement) => (
              <Plate
                key={el.id}
                el={el}
                currentElement={currentElement}
                setCurrentElement={setCurrentElement}
                setBlankForm={setBlankForm}
              />
            ))}
          </ul>
        </div>
        <div className="panel">
          <h2>Содержание элемента</h2>
          <FormContainer 
            category={category} 
            elements={elements}
            currentElement={currentElement} 
            blankForm={blankForm} 
            setCurrentElement={setCurrentElement}
          />
        </div>
      </div>
    </section>
  );
};

export default Admin;
