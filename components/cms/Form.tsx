import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { v4 as uuidv4 } from 'uuid';
import { PhotographIcon } from '@heroicons/react/solid';

interface IFormInput {
  name: string;
  description: string;
  tag: string;
  source: string;
  image: string;
}

const Form = () => {
  const { register, watch, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  //Subscribing to title value to auto generate a slug
  const cyrillicToTranslit = CyrillicToTranslit();
  const newsTitle = watch('name');
  const generatedSlug = cyrillicToTranslit
    .transform(newsTitle, '-')
    .toLowerCase();

  return (
    <form className="flex flex-col px-3 mt-4" onSubmit={handleSubmit(onSubmit)}>
      <label>Название</label>
      <input
        type="text"
        {...register('name')}
        placeholder="Заголовок новости"
      />
      <label className="mt-6">Описание</label>
      <input
        type="text"
        {...register('description')}
        placeholder="Короткое содержание новости"
      />
      <label className="mt-6">Тэг</label>
      <input
        type="text"
        {...register('tag')}
        placeholder="Интервью, новость, рецензия..."
      />
      <label className="mt-6">Ссылка</label>
      <input
        type="text"
        {...register('source')}
        placeholder="Ссылка на статью, видео..."
      />
      <label className="mt-8 bg-zinc-700 rounded-md flex items-center text-zinc-400 flex-col py-5 cursor-pointer">
        Добавить фото на заставку
        <PhotographIcon className="w-7 mt-2" />
        <input type="file" {...register('image')} />
      </label>

      <input
        type="submit"
        value="Сохранить"
        className="mt-10 p-4 bg-mainDark rounded-sm hover:bg-main basic-animation text-md text-night"
      />
    </form>
  );
};

export default Form;
