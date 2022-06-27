import React, { useEffect, useState } from 'react';
//Components
import Actor from '../../components/Actor';
import { PhotoModal } from '../../components/PhotoModal';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, FreeMode } from 'swiper';
//Framer
import { motion } from 'framer-motion';
import { PageAnimation } from '../../components/PageAnimation';
import { GetServerSideProps } from 'next';
import {
  getDocumentFromCollection,
  getDocumentsContainingSlug,
} from '../../components/firebase';
import { ActorType, PlayType } from '../../types/categories';
import Image from 'next/image';
import { ActorList } from '../../components/ActorList';

interface Props {
  play: PlayType;
  cast: ActorType[];
}

const PlayDetail = ({ play, cast }: Props) => {
  const [showDescription, setShowDescription] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState('');
  const [isFullScreen, setFullScreen] = useState(false);

  const {
    name,
    description,
    genre,
    thumbnail,
    youtubeLink,
    rating,
    length,
    photos,
  } = play;

  const handleShowDescription = () => {
    setShowDescription(true);
  };

  const handleShowPhoto = (photo: any) => {
    setClickedPhoto(photo);
    setFullScreen(true);
  };

  return (
    <div className="max-w-4xl lg:mx-auto py-8 lg:py-0">
      <PhotoModal
        clickedPhoto={clickedPhoto}
        setClickedPhoto={setClickedPhoto}
        isFullScreen={isFullScreen}
        setFullScreen={setFullScreen}
      />
      <header className="flex justify-between items-center">
        <h1 className="text-2xl text-neutral-200 font-bold leading-none lg:text-3xl">
          {name}
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-zinc-400">Рейтинг</span>
          <div className="text-2xl bg-main text-neutral-50 px-4 py-2 rounded-md font-bold leading-tight">
            {rating}
          </div>
        </div>
      </header>
      <div className="mt-4">
        <Image
          src={thumbnail}
          alt={name}
          layout="responsive"
          width={3}
          height={2}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-wrap gap-x-16 mb-8">
        <div className="flex flex-col mt-6">
          <span className="text-neutral-400">Страна</span>
          <p>Россия</p>
        </div>
        <div className="flex flex-col mt-6">
          <span className="text-neutral-400">Продолжительность</span>
          <p>{length}</p>
        </div>
        <div className="flex flex-col mt-6">
          <span className="text-neutral-400">Жанр</span>
          <p>{genre.toLowerCase()}</p>
        </div>
      </div>
      <section className="py-8">
        <h2 className="text-3xl text-neutral-200 font-bold leading-8 mb-8">
          Описание
        </h2>
        <p>
          {showDescription
            ? `${description}`
            : `${description.substring(0, 500)}...`}
          <span
            style={{ color: '#fff', cursor: 'pointer' }}
            onClick={handleShowDescription}
          >
            {!showDescription && `Читать далее`}
          </span>
        </p>
      </section>
      <section className="py-8 relative">
        <h2 className="text-3xl text-neutral-200 font-bold leading-8 mb-8">
          Фото спектакля
        </h2>
        <Swiper
          navigation={true}
          breakpoints={{
            300: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="mySwiper"
          freeMode={true}
          modules={[Navigation, FreeMode]}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <Image
                src={photo}
                layout="responsive"
                width={16}
                height={9}
                objectFit="cover"
                objectPosition="top"
                alt="Фото спектакля"
                onClick={() => handleShowPhoto(photo)}
                className="rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="py-8 relative">
        <h2 className="text-3xl text-neutral-200 font-bold leading-8 mb-8">
          В ролях
        </h2>
        <ActorList actors={cast} />
      </section>
      {youtubeLink && (
        <section className="py-8">
          <h2 className="text-3xl text-neutral-200 font-bold leading-8 mb-8">
            Видео
          </h2>
          <iframe
            width="100%"
            height="auto"
            src={youtubeLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ aspectRatio: '16/9' }}
          ></iframe>
        </section>
      )}
    </div>
  );
};

export default PlayDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug;
  const play = await getDocumentFromCollection('plays', slug);
  const cast = await getDocumentsContainingSlug(
    'actors',
    'playedIn',
    slug,
    'sortId'
  );

  return {
    props: { play, cast },
  };
};
