import React, { useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchPlays } from "../reducers/playsSlice";
//Components
import Play from "../components/Play";

const Plays = ({ plays }) => {
  return (
    <main>
      <section className="plays">
        <h2>Спектакли</h2>
        <div className="plays_expand">
          {plays.map((play) => (
            <Play play={play} key={play.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Plays;
