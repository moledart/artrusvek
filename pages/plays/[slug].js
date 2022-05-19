import React, { useEffect, useState } from 'react';
//Redux
import { useSelector } from 'react-redux';
import { selectAllActors, selectPlayBySlug } from '../../reducers/dataSlice';
//Router
import { useLocation } from 'react-router-dom';
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

const PlayDetail = () => {
  //Get location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  //Getting data from the store
  const play = useSelector((state) => selectPlayBySlug(state, pathId));
  const involvedActors = useSelector((state) => {
    const allActors = selectAllActors(state);
    return allActors.filter((actor) => actor.playedIn === play.slug);
  });
  const canLoad = play && involvedActors;

  //State
  const [showDescription, setShowDescription] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState('');
  const [isFullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleShowDescription = () => {
    setShowDescription(true);
  };

  const handleShowPhoto = (photo) => {
    setClickedPhoto(photo);
    setFullScreen(true);
  };

  return (
    <React.Fragment>
      <PhotoModal
        clickedPhoto={clickedPhoto}
        setClickedPhoto={setClickedPhoto}
        isFullScreen={isFullScreen}
        setFullScreen={setFullScreen}
      />
      {canLoad && (
        <motion.main
          variants={PageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
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
              <img
                src={process.env.PUBLIC_URL + play.thumbnail}
                alt={play.name}
                loading="lazy"
              />
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
                  style={{ color: '#fff', cursor: 'pointer' }}
                  onClick={handleShowDescription}
                >
                  {!showDescription && `Читать далее`}
                </span>
              </p>
            </section>
            <section className="play_photos">
              <h2>Фото спектакля</h2>
              <>
                <Swiper
                  navigation={true}
                  breakpoints={{
                    300: {
                      slidesPerView: 1.2,
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
                  {play.photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={photo}
                        alt="Фото спектакля"
                        className="carousel_photo"
                        onClick={() => handleShowPhoto(photo)}
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            </section>
            <section className="play_actors">
              <h2>В ролях</h2>
              <>
                <Swiper
                  navigation={true}
                  breakpoints={{
                    300: {
                      slidesPerView: 2.2,
                      spaceBetween: 24,
                    },
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 24,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 24,
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
            {play.youtubeLink && (
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
                  style={{ aspectRatio: '16/9' }}
                ></iframe>
              </section>
            )}
          </div>
        </motion.main>
      )}
    </React.Fragment>
  );
};

export default PlayDetail;
