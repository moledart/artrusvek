import React, { useEffect, useState } from "react";
//Router
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
//Components
import Actor from "../components/Actor";
//Framer
import { motion, usePresence } from "framer-motion";
import { PageAnimation } from "../components/PageAnimation";
//Redux
import { useSelector } from "react-redux";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const PlayDetail = () => {
  //Getting data back
  const { plays = [], actors = [], status } = useSelector((state) => state.data);
  //Get location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const [play, setPlay] = useState({});
  const [involvedActors, setInvolvedActors] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (status === "resolved") {
      setPlay(plays.find((play) => play.slug === pathId));
    }
  }, [plays]);
  console.log(play.photos);

  useEffect(() => {
    setInvolvedActors(actors.filter((actor) => actor.playedIn === play.slug));
  }, [play]);

  const handleShowDescription = () => {
    setShowDescription(true);
  };

  return (
    <>
      {Object.entries(play).length > 0 && status === "resolved" && (
        <motion.main variants={PageAnimation} initial="hidden" animate="show" exit="exit">
          <div className="play_detail">
            <div className="detail_header">
              <div className="play_name">
                <h1>{play.name}</h1>
              </div>
              <div className="rating_wrapper">
                <span>Рейтинг</span>
                <div className="rating">{play.rating}</div>
              </div>
            </div>
            <div className="play_thumbnail">
              <img src={play.thumbnail} alt="" />
            </div>
            <div className="play_params">
              <div className="play_param">
                <span className="param">Страна</span>
                <span className="play_genre">Россия</span>
              </div>
              <div className="play_param">
                <span className="param">Продолжительность</span>
                <p>{play.length}</p>
              </div>
              <div className="play_param">
                <span className="param">Жанр</span>
                <span className="play_genre">{play.genre.toLowerCase()}</span>
              </div>
            </div>
            <section className="description">
              <h2>Описание</h2>
              <p>
                {showDescription
                  ? `${play.description}`
                  : `${play.description.substring(0, 500)}...`}
                <span
                  style={{ color: "#fff", cursor: "pointer" }}
                  onClick={handleShowDescription}
                >
                  {!showDescription && `Читать далее`}
                </span>
              </p>
            </section>
            <section className="play_actors">
              <h2>В ролях</h2>
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
                  {involvedActors.map((actor) => (
                    <SwiperSlide key={actor.id}>
                      <Actor actor={actor} roleVisible={true} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            </section>
            <section className="play_video">
              <h2>Видео</h2>
              <iframe
                width="100%"
                height="auto"
                src={play.youtubeLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ aspectRatio: "16/9" }}
              ></iframe>
            </section>
          </div>
        </motion.main>
      )}
    </>
  );
};

export default PlayDetail;
