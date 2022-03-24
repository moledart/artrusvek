import React from "react";
//Router
import { Link } from "react-router-dom";

const Play = ({ play }) => {
  const { name, genre, rating, thumbnail, briefInfo, slug } = play;
  return (
    <Link to={`/plays/${slug}`} className="play">
      <div className="play_thumbnail">
        <img src={process.env.PUBLIC_URL + thumbnail} />
        <div className="play_rating">{rating}</div>
      </div>
      <div className="play_info">
        <h3 className="play_name">{name}</h3>
        <span className="play_genre">{genre.toLowerCase()}</span>
        <p className="play_description">{briefInfo}</p>
      </div>
    </Link>
  );
};

export default Play;
