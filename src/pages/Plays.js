import React from "react";
//Redux
import { useSelector } from "react-redux";
//Components
import Play from "../components/Play";
//Framer
import { motion } from "framer-motion";
import { PageAnimation } from "../components/PageAnimation";

const Plays = () => {
  window.scrollTo(0, 0);
  const { plays = [], status } = useSelector((state) => state.data);

  return (
    <motion.main variants={PageAnimation} initial="hidden" animate="show" exit="exit">
      <section className="plays">
        <h2>Спектакли</h2>
        <div className="plays_expand">
          {plays.map((play) => (
            <Play play={play} key={play.id} />
          ))}
        </div>
      </section>
    </motion.main>
  );
};

export default Plays;
