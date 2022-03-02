import React from "react";
//Router
import { Link } from "react-router-dom";

const Actor = ({ actor, roleVisible }) => {
  const { photo, name, role, slug } = actor;
  return (
    <Link to={`/team/${slug}`} className="actor">
      <div className="actor_photo">
        <img src={photo} alt="" width="100%" />
      </div>
      <div className="actor_description">
        <h3 className="actor_name">{name}</h3>
        {roleVisible && <span className="actor_role">{role}</span>}
      </div>
    </Link>
  );
};

export default Actor;
