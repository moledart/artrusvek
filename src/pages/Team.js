import React, { useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchActors } from "../reducers/actorsSlice";
//Components
import Actor from "../components/Actor";

const Actors = () => {
  //Fetching data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActors());
  }, [dispatch]);
  //Getting data back
  const actors = useSelector((state) => state.actors.actors);
  const producers = actors.filter((actor) => actor.role === "продюсер");
  const directors = actors.filter((actor) => actor.role === "режиссер");
  const crew = actors.filter((actor) => actor.role === "актер");
  const composers = actors.filter((actor) => actor.role === "композитор");
  const authors = actors.filter((actor) => actor.role === "автор");
  const arrangers = actors.filter((actor) => actor.role === "аранжировщик");

  return (
    <main>
      <section className="team">
        <h2>Творческая группа</h2>
        <div className="wrapper">
          <div className="actor_group">
            <h3>Продюсеры</h3>
            <div className="actors_expand">
              {producers.length &&
                producers.map((actor) => <Actor actor={actor} key={actor.id} />)}
            </div>
          </div>
          <div className="actor_group">
            <h3>Режиссеры</h3>
            <div className="actors_expand">
              {directors.length &&
                directors.map((actor) => <Actor actor={actor} key={actor.id} />)}
            </div>
          </div>
          <div className="actor_group">
            <h3>Композиторы</h3>
            <div className="actors_expand">
              {composers.length &&
                composers.map((actor) => <Actor actor={actor} key={actor.id} />)}
            </div>
          </div>
          <div className="actor_group">
            <h3>Аранжировщики</h3>
            <div className="actors_expand">
              {arrangers.length &&
                arrangers.map((actor) => <Actor actor={actor} key={actor.id} />)}
            </div>
          </div>
          <div className="actor_group">
            <h3>Авторы</h3>
            <div className="actors_expand">
              {authors.length &&
                authors.map((actor) => <Actor actor={actor} key={actor.id} />)}
            </div>
          </div>
          <div className="actor_group">
            <h3>Актеры</h3>
            <div className="actors_expand">
              {crew.length && crew.map((actor) => <Actor actor={actor} key={actor.id} />)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Actors;
