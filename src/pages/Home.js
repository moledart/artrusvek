import React from "react";
//Components
import Section from "../components/Section";

const Home = () => {
  return (
    <main>
      <Section title="Cпектакли" linkTo="/plays" />
      <Section title="Творческая группа" linkTo="/team" />
    </main>
  );
};

export default Home;
