import React from "react";
//Components
import { PlayList } from "../components/PlayList";
import { ActorList } from "../components/ActorList";
import { SectionHeader } from "../components/SectionHeader";
//Redux
import { useSelector } from "react-redux";
import { selectAllActors, selectAllPlays } from "../reducers/dataSlice";
//Framer
import { motion } from "framer-motion";
import { PageAnimation } from "../components/PageAnimation";

const Home = () => {
  return (
    <motion.main variants={PageAnimation} initial="hidden" animate="show" exit="exit">
      <section>
        <SectionHeader title="Спектакли" link="/plays" linkText="Все спектакли" />
        <PlayList />
      </section>
      <section>
        <SectionHeader title="Творческая группа" link="/team" linkText="Вся команда" />
        <ActorList />
      </section>
    </motion.main>
  );
};

export default Home;
