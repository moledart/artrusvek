import React, { useEffect, useState } from 'react';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { v4 as uuidv4 } from 'uuid';
import { PhotographIcon, XIcon } from '@heroicons/react/solid';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../../firebase-config';
import { getDownloadURL, ref, uploadBytesResumable, uploadString } from 'firebase/storage';
import { TCategory, TCategoryElement, TCategoryElements } from '../../types/categories';
import moment from 'moment';
import Image from 'next/image';
import util from '../../functions/util';
import BeatLoader from 'react-spinners/BeatLoader'

interface FormProps {
  category: TCategory;
  currentElement: any; // for now, need to change it later
  setCurrentElement: React.Dispatch<React.SetStateAction<TCategoryElement>>;
  blankForm: boolean;
  elements: TCategoryElements;
}

const initialValues = {
  news: {
    date: moment().format('YYYY-MM-DD'),
    id: '',
    name: '',
    published: '',
    slug: '',
    source: '',
    tag: '',
    thumbnail: '',
    uid: '',
  },
  plays: {
    actors: [],
    briefInfo: '',
    description: '',
    genre: '',
    id: '',
    igLink: '',
    length: '',
    name: '',
    photos: [],
    rating: '',
    slug: '',
    sortId: '',
    thumbnail: '',
    uid: '',
    youtubeLink: '',
  },
  actors: {
    thumbnail: '',
    birthday: '',
    description: '',
    education: '',
    id: '',
    name: '',
    playedIn: [],
    role: '',
    slug: '',
    sortId: 0,
    uid: '',
    socials: {
      fbLink: '',
      igLink: '',
      vkLink: '',
      link: '',
    },
  },
};

const FormContainer = ({ category = 'news', elements, currentElement, blankForm, setCurrentElement}: FormProps) => {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState<TCategoryElement | any>(initialValues[category]);
  const [thumbnail, setThumbnail] = useState<any>();

  // const dateCheck = new Date(values.date)
  // const testDate = dateCheck.toISOString();

  useEffect(() => {
    if (currentElement && !blankForm) {
      setValues(currentElement);
      setThumbnail(currentElement.thumbnail);
    }
  }, [currentElement, blankForm]);

  useEffect(() => {
    if (blankForm) {
      setValues(initialValues[category])
      setThumbnail('');
    }
  }, [blankForm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(blankForm ? 'starting new element' : 'starting update');

    // Create ref for a new element update old
    let elementRef = blankForm ? doc(collection(db, category)) : doc(db, category, values.uid);
    console.log(elementRef)

    let newObject = {
      ...values,
      published: blankForm ? serverTimestamp() : values.published,
      id: blankForm ? uuidv4() : values.id,
      slug: blankForm ? util.getSlug(values.name) : values.slug,
      uid: blankForm ? elementRef.id : values.uid
    }

    // If there's a thumbnail, upload to storage and get link
    if (thumbnail != values.thumbnail) {
      const thumbnailRef = ref(storage,`image/${category}/${util.getSlug(values.name)}/thumbnail`);
      await uploadString(thumbnailRef, thumbnail, 'data_url')
        .then(async () => {
          const downloadUrl = await getDownloadURL(thumbnailRef);
          console.log(downloadUrl);
          newObject.thumbnail = downloadUrl;
          console.log(newObject);
        });
    }

    // Upload to firestore
    blankForm ? await setDoc(elementRef, newObject) : await updateDoc(elementRef, newObject)  

    // Cleaning
    setLoading(false);
  }


  const handleDelete = async () => {
    console.log('deleting...')
    const elementRef = doc(db, category, values.uid);
    await deleteDoc(elementRef);
    setCurrentElement(elements[0]);
  };

  const handleThumbnailAsFile = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      let reader = new FileReader();
      let image = e.currentTarget.files[0];
      reader.readAsDataURL(image)
      reader.onload = () => setThumbnail(reader.result)
    }
  };

  if (category === 'news' && 'tag' in values) {
    return (
      <div className='flex flex-col'>
        <form className="flex flex-col px-3 mt-4 relative" onSubmit={(e) => handleSubmit(e)}>
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
            name="source"
            placeholder="Ссылка на статью, видео..."
            value={values.source}
            onChange={handleInputChange}
            required
          />

          <label className="mt-6">Дата новости</label>
          <input
            type="date"
            name="date"
            value={values.date ? moment(values.date).format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')}
            onChange={handleInputChange}
            required
          />

          {thumbnail ? (
            <div className="relative mt-8 rounded-md  ">
              <div
                onClick={() => setThumbnail('')}
                className="absolute right-2 top-2 cursor-pointer rounded-full bg-white p-1 hover:text-mainDark text-zinc-900 basic-animation z-10"
              >
                <XIcon className="h-5 w-5" />
              </div>
              <Image
                src={thumbnail}
                alt={values.name}
                layout="responsive"
                objectFit="cover"
                width={16}
                height={9}
                className="absolute top-0 left-0 w-full z-0"
              />
            </div>
          ) : (
            <label className="mt-8 bg-zinc-700 rounded-md flex items-center text-zinc-400 flex-col py-5 cursor-pointer relative">
              Добавить фото на заставку
              <PhotographIcon className="w-7 mt-2" />
              <input type="file" name="image" accept = 'image/*' onChange={handleThumbnailAsFile} />
            </label>
          )}

          <button
            type="submit"
            className="mt-10 p-4 bg-mainDark rounded-sm hover:bg-main basic-animation text-md text-night cursor-pointer"
          >
            {loading ? <BeatLoader color={'#1f2024'} loading={loading} size='12px' /> : blankForm ? 'Добавить новый элемент' : "Обновить данные"}
          </button>
        </form>
        <button
            className="mt-5 basic-animation text-red-700 hover:text-white w-fit mx-auto"
            onClick={handleDelete}
          >
            Удалить элемент
          </button>
      </div>
      
    );
  }

  return null;
};

export default FormContainer;
