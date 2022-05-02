import React, { useEffect, useState } from "react";
//Redux
import { useSelector } from "react-redux";
import { selectActorBySlug, selectAllPlays } from "../reducers/dataSlice";
//Router
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
//Components
import SocialLinks from "../components/SocialLinks";
//Framer
import { motion, usePresence } from "framer-motion";
import { PageAnimation } from "../components/PageAnimation";

const ActorDetail = () => {
  //Get location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //Getting data from the store
  const actor = useSelector((state) => selectActorBySlug(state, pathId));
  const involvedPlays = useSelector((state) => {
    const allPlays = selectAllPlays(state);
    return allPlays.filter((play) => play.slug === actor.playedIn);
  });
  const canLoad = actor && involvedPlays;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      {canLoad && (
        <motion.main variants={PageAnimation} initial="hidden" animate="show" exit="exit">
          <div className="actor_detail">
            <div className="actor_bio">
              <div className="photo">
                <img src={actor.photo} alt={actor.name} loading="lazy" />
              </div>
              <div className="info">
                <h2>{actor.name}</h2>
                <span>{actor.role}</span>
                <span className="param">Дата рождения</span>
                <p className="param_value">{actor.birthday}</p>
                <span className="param">Образование</span>
                <p className="param_value">{actor.education}</p>
                <SocialLinks actor={actor} />
                {involvedPlays.length ? (
                  <>
                    <span className="param">Спектакли</span>
                    <div className="plays_involved">
                      {involvedPlays.map((play) => (
                        <Link to={`/plays/${play.slug}`} className="play" key={play.id}>
                          {play.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            {actor.description && (
              <>
                <span className="param">Описание</span>
                <div dangerouslySetInnerHTML={{ __html: actor.description }}></div>
              </>
            )}
          </div>
        </motion.main>
      )}
    </React.Fragment>
  );
};

export default ActorDetail;
