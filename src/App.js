import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
//Styles
import "./styles/app.scss";
//Components
import Home from "./pages/Home";
import Plays from "./pages/Plays";
import Team from "./pages/Team";
import ActorDetail from "./pages/ActorDetail";
import News from "./pages/News";
import Nav from "./components/Nav";
//Router
import { Routes, Route } from "react-router-dom";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./reducers/dataSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  //Getting data back
  const { data, status } = useSelector((state) => state.data);
  let sortedActors = [];
  let sortedPlays = [];
  if (status === "resolved") {
    sortedActors = [...data.actors].sort((a, b) => {
      return a.sortId - b.sortId;
    });
    sortedPlays = [...data.plays].sort((a, b) => {
      return a.sortId - b.sortId;
    });
  }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home plays={sortedPlays} actors={sortedActors} />} />
        <Route path="/plays" element={<Plays plays={sortedPlays} />} />
        <Route path="/team" element={<Team actors={sortedActors} />} />
        <Route path="/team/:slug" element={<ActorDetail actors={sortedActors} />} />
        <Route path="/News" element={<News />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Ой, кажется мы не туда попали!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
