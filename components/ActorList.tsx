import React from "react";
//Redux
import { useSelector } from "react-redux";
import { selectAllActors } from "../reducers/dataSlice";
//Components
import Actor from "./Actor";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper";

export const ActorList = () => {
  const actors = useSelector(selectAllActors);

  return (
    <Swiper
      navigation={true}
      breakpoints={{
        300: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      }}
      className="mySwiper"
      freeMode={true}
      modules={[Navigation, FreeMode]}
    >
      {actors.map((actor) => (
        <SwiperSlide key={actor.id}>
          <Actor actor={actor} roleVisible={true} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
