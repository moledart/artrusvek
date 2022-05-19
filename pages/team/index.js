import React, { useEffect } from 'react';
//Redux
import { useSelector } from 'react-redux';
//Components
import Actor from '../../components/Actor';
//Framer
import { motion } from 'framer-motion';
import { PageAnimation } from '../../components/PageAnimation';
import { selectAllActors } from '../../reducers/dataSlice';

const Actors = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);
  const actors = useSelector(selectAllActors);
  const producers = actors.filter((actor) => actor.role === 'продюсер');
  const directors = actors.filter((actor) => actor.role === 'режиссер');
  const crew = actors.filter((actor) => actor.role === 'актер');
  const composers = actors.filter((actor) => actor.role === 'композитор');
  const authors = actors.filter((actor) => actor.role === 'автор');
  const arrangers = actors.filter((actor) => actor.role === 'аранжировщик');

  return (
    <motion.main
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <section className="team">
        <h2>Творческая группа</h2>
        <div className="wrapper">
          <div className="actor_group">
            <div className="group_name">
              <span>Продюсеры</span>
              <div className="line"></div>
            </div>
            <div className="actors_expand">
              {producers.length &&
                producers.map((actor) => (
                  <Actor actor={actor} key={actor.id} />
                ))}
            </div>
          </div>
          <div className="actor_group">
            <div className="group_name">
              <span>Режиссеры</span>
              <div className="line"></div>
            </div>
            <div className="actors_expand">
              {directors.length &&
                directors.map((actor) => (
                  <Actor actor={actor} key={actor.id} />
                ))}
            </div>
          </div>
          <div className="actor_group">
            <div className="group_name">
              <span>Авторы</span>
              <div className="line"></div>
            </div>
            <div className="actors_expand">
              {authors.length &&
                authors.map((actor) => <Actor actor={actor} key={actor.id} />)}
            </div>
          </div>
          <div className="actor_group">
            <div className="group_name">
              <span>Композиторы</span>
              <div className="line"></div>
            </div>
            <div className="actors_expand">
              {composers.length &&
                composers.map((actor) => (
                  <Actor actor={actor} key={actor.id} />
                ))}
            </div>
          </div>
          <div className="actor_group">
            <div className="group_name">
              <span>Аранжировщики</span>
              <div className="line"></div>
            </div>
            <div className="actors_expand">
              {arrangers.length &&
                arrangers.map((actor) => (
                  <Actor actor={actor} key={actor.id} />
                ))}
            </div>
          </div>

          <div className="actor_group">
            <div className="group_name">
              <span>Актеры</span>
              <div className="line"></div>
            </div>
            <div className="actors_expand">
              {crew.length &&
                crew.map((actor) => <Actor actor={actor} key={actor.id} />)}
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Actors;
