import React, { useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchActors } from "../reducers/actorsSlice";
//Components
import Actor from "./Actor";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const ActorList = () => {
  //Fetching data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActors());
  }, [dispatch]);
  //Getting data back
  const actors = useSelector((state) => state.actors.actors);

  return (
    <>
      <Swiper
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 24,
          },
        }}
        className="mySwiper"
        modules={[Navigation]}
      >
        {actors.map((actor) => (
          <SwiperSlide key={actor.id}>
            <Actor actor={actor} roleVisible={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ActorList;
