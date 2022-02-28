import React from "react";
//Router
import { Link } from "react-router-dom";

const Actor = ({ actor, roleVisible }) => {
  const { photo, name, role, slug } = actor;
  return (
    <Link to={`actors/${slug}`} className="actor">
      <div className="actor_photo">
        <img src={photo} alt="" width="100%" />
      </div>
      <div className="actor_description">
        <h4 className="actor_name">{name}</h4>
        {roleVisible && <span className="actor_role">{role}</span>}
      </div>
    </Link>
  );
};

export default Actor;
