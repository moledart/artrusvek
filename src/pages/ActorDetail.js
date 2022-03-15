import React, { useEffect, useState } from "react";
//Router
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
//Components
import SocialLinks from "../components/SocialLinks";
//Framer
import { motion, usePresence } from "framer-motion";
import { PageAnimation } from "../components/PageAnimation";
//Redux
import { useSelector } from "react-redux";

const ActorDetail = () => {
  //Getting data back
  const { plays, actors, status } = useSelector((state) => state.data);
  //Get location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const [actor, setActor] = useState({});
  const [involvedPlays, setInvolvedPlays] = useState([]);

  useEffect(() => {
    if (status === "resolved") {
      setActor(actors.find((actor) => actor.slug === pathId));
    }
    window.scrollTo(0, 0);
  }, [actors]);

  useEffect(() => {
    setInvolvedPlays(plays.filter((play) => play.slug === actor.playedIn));
  }, [actor]);

  return (
    <>
      <motion.main variants={PageAnimation} initial="hidden" animate="show" exit="exit">
        {Object.entries(actor).length > 0 && status === "resolved" && (
          <div className="actor_detail">
            <div className="actor_bio">
              <div className="photo">
                <img src={actor.photo} alt="" />
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
        )}
      </motion.main>
    </>
  );
};

export default ActorDetail;
