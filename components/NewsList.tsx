import React from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, FreeMode } from 'swiper';
import { NewsPostType } from '../types/categories';
import NewsPost from './NewsPost';

interface Props {
  news: NewsPostType[];
}

export const NewsList = ({ news }: Props) => {
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
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
      className="mySwiper"
      freeMode={true}
      modules={[Navigation, FreeMode]}
    >
      {news.map((post) => (
        <SwiperSlide key={post.id}>
          <NewsPost post={post} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
