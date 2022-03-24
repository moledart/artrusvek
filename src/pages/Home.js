import React from "react";
//Components
import Actor from "../components/Actor";
import Play from "../components/Play";
//Redux
import { useSelector } from "react-redux";
//Router
import { Link } from "react-router-dom";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper";
//Framer
import { motion } from "framer-motion";
import { PageAnimation } from "../components/PageAnimation";

const Home = () => {
  window.scrollTo(0, 0);
  //Getting data back
  const { plays, actors, status } = useSelector((state) => state.data);

  return (
    <motion.main variants={PageAnimation} initial="hidden" animate="show" exit="exit">
      <section>
        <div className="section_header">
          <h2>Спектакли</h2>
          <Link to="/plays" className="title_link">
            Все спектакли
          </Link>
        </div>
        <>
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
        </>
      </section>
      <section>
        <div className="section_header">
          <h2>Творческая группа</h2>
          <Link to="/team" className="title_link">
            Вся команда
          </Link>
        </div>
        <>
          <Swiper
            navigation={true}
            breakpoints={{
              300: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
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
        </>
      </section>
    </motion.main>
  );
};

export default Home;
