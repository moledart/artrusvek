import React from "react";

const Play = ({ play }) => {
  const { name, genre, rating, thumbnail, briefInfo } = play;
  return (
    <div className="play">
      <div className="play_thumbnail">
        <img src={thumbnail} />
        <div className="play_rating">{rating}</div>
      </div>
      <div className="play_info">
        <h3 className="play_name">{name}</h3>
        <span className="play_genre">{genre}</span>
        <p className="play_description">{briefInfo}</p>
      </div>
    </div>
  );
};

export default Play;
