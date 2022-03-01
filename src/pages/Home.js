import React, { useEffect } from "react";
//Components
import Actor from "../components/Actor";
import Play from "../components/Play";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../reducers/dataSlice";
//Router
import { Link } from "react-router-dom";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Home = ({ plays, actors }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);
  // //Getting data back
  // const { data, status } = useSelector((state) => state.data);
  // let sortedActors = [];
  // if (status === "resolved") {
  //   sortedActors = [...data.actors].sort((a, b) => {
  //     return a.sortId - b.sortId;
  //   });
  // }

  // console.log(sortedActors);

  return (
    <main>
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
            modules={[Navigation]}
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
            modules={[Navigation]}
          >
            {actors.map((actor) => (
              <SwiperSlide key={actor.id}>
                <Actor actor={actor} roleVisible={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </section>
    </main>
  );
};

export default Home;
