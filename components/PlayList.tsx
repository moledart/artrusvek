import React from 'react';
//Components
import Play from './Play';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, FreeMode } from 'swiper';
import { PlayType } from '../types/categories';

interface Props {
  plays: PlayType[];
}

export const PlayList = ({ plays }: Props) => {
  return (
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
          slidesPerView: 2,
          spaceBetween: 32,
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
      {plays.map((play) => (
        <SwiperSlide key={play.id}>
          <Play play={play} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
