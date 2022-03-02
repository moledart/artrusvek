import React, { useEffect } from "react";
//Router
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
//Components
import SocialLinks from "../components/SocialLinks";
import Play from "../components/Play";

const ActorDetail = ({ actors, plays }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //Get location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const actor = actors.find((actor) => actor.slug === pathId);
  const involvedPlays = plays.filter((play) => play.slug === actor.playedIn);
  console.log(involvedPlays);

  return (
    <main>
      {actors.length && (
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
          <span className="param">Описание</span>
          <div dangerouslySetInnerHTML={{ __html: actor.description }}></div>
        </div>
      )}
    </main>
  );
};

export default ActorDetail;
