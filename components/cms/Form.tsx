import React, { SyntheticEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { v4 as uuidv4 } from 'uuid';
import { PhotographIcon, XIcon } from '@heroicons/react/solid';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../../firebase-config';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

const newsValues = {
  name: '',
  tag: '',
  link: '',
  date: '',
};

const Form = () => {
  const [values, setValues] = useState(newsValues);
  const [thumbnail, setThumbnail] = useState<any>();

  //Subscribing to title value to auto generate a slug
  const cyrillicToTranslit = CyrillicToTranslit();
  const newsTitle = values.name;
  const generatedSlug = cyrillicToTranslit
    .transform(newsTitle, '-')
    .toLowerCase();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'news'), {
      id: uuidv4(),
      name: values.name,
      slug: generatedSlug,
      tag: values.tag.toLowerCase(),
      link: values.link,
      createdAt: serverTimestamp(),
      postDate: values.date,
    });

    const imageRef = ref(storage, `image/news/${generatedSlug}/thumbnail`);

    if (thumbnail) {
      await uploadString(imageRef, thumbnail, 'data_url').then(async () => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, 'news', docRef.id), {
          image: downloadUrl,
        });
      });
    }

    setValues(newsValues);
    setThumbnail('');
  };

  const addThumbnail = (e: React.FormEvent<HTMLInputElement>) => {
    const image = e.currentTarget.files;
    const reader = new FileReader();

    if (image) {
      reader.readAsDataURL(image[0]);
    }
    reader.onload = (readerEvent) => {
      setThumbnail(readerEvent.target?.result);
    };
  };

  return (
    <form className="flex flex-col px-3 mt-4" onSubmit={handleSubmit}>
      <label>Название</label>
      <input
        type="text"
        name="name"
        placeholder="Заголовок новости"
        value={values.name}
        onChange={handleInputChange}
        required
      />

      <label className="mt-6">Тэг</label>
      <input
        type="text"
        name="tag"
        placeholder="Интервью, новость, рецензия..."
        value={values.tag}
        onChange={handleInputChange}
        required
      />

      <label className="mt-6">Ссылка</label>
      <input
        type="text"
        name="link"
        placeholder="Ссылка на статью, видео..."
        value={values.link}
        onChange={handleInputChange}
        required
      />

      <label className="mt-6">Дата новости</label>
      <input
        type="date"
        name="date"
        placeholder=""
        value={values.date}
        onChange={handleInputChange}
        required
      />

      <label className="mt-8 bg-zinc-700 rounded-md flex items-center text-zinc-400 flex-col py-5 cursor-pointer relative">
        Добавить фото на заставку
        <PhotographIcon className="w-7 mt-2" />
        <input type="file" name="image" onChange={addThumbnail} required />
      </label>
      {thumbnail && (
        <div className="relative">
          <div
            onClick={() => setThumbnail('')}
            className="absolute right-2 top-2 cursor-pointer rounded-full bg-white p-1 hover:text-mainDark text-zinc-900 basic-animation"
          >
            <XIcon className="h-5 w-5" />
          </div>
          <img src={thumbnail} alt="" className="w-full" />
        </div>
      )}

      <input
        type="submit"
        value="Сохранить"
        className="mt-10 p-4 bg-mainDark rounded-sm hover:bg-main basic-animation text-md text-night"
      />
    </form>
  );
};

export default Form;
