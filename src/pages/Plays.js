import React, { useEffect } from "react";
//Redux
import { useSelector } from "react-redux";
import { selectAllPlays } from "../reducers/dataSlice";
//Components
import Play from "../components/Play";
//Framer
import { motion } from "framer-motion";
import { PageAnimation } from "../components/PageAnimation";

const Plays = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const plays = useSelector(selectAllPlays);
  const renderedPlays = plays.map((play) => <Play play={play} key={play.id} />);

  return (
    <motion.main variants={PageAnimation} initial="hidden" animate="show" exit="exit">
      <section className="plays">
        <h2>Спектакли</h2>
        <div className="plays_expand">{renderedPlays}</div>
      </section>
    </motion.main>
  );
};

export default Plays;
