import React from "react";

const Play = () => {
  return (
    <div className="play">
      <div className="play__thumbnail">
        <img src={thumbnail} width="100%" height="158" />
        <div className="play__rating">{rating}</div>
      </div>
      <div className="play__info">
        <h3 className="play__name">{name}</h3>
        <span className="play__genre">{genre}</span>
        <p className="play__description">{info}</p>
      </div>
    </div>
  );
};

export default Play;
