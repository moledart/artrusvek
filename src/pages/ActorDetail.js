import React from "react";
//Router
import { useLocation } from "react-router-dom";
//Components
import SocialLinks from "../components/SocialLinks";

const ActorDetail = ({ actors }) => {
  //Get location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(pathId);
  const actor = actors.find((actor) => actor.slug === pathId);
  console.log(actor);
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
              <span className="param">Социальные сети</span>
              <SocialLinks actor={actor} />
              <span className="param">Описание</span>
              <p dangerouslySetInnerHTML={{ __html: actor.description }}></p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ActorDetail;
