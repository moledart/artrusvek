import React, { useState, useEffect } from "react";
//Data
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { addData, fetchPlays } from "../counterSlice";
//Components
import Section from "../components/Section";

const Home = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPlays());
  // }, [dispatch]);

  // const plays = useSelector((state) => state.plays.plays);

  return (
    <main>
      <Section title="Cпектакли" linkTo="/plays" />
      <Section title="Творческая группа" linkTo="/actors" />
    </main>
  );
};

export default Home;
