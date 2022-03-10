import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
//Styles
import "./styles/app.scss";
//Components
import Home from "./pages/Home";
import Plays from "./pages/Plays";
import Team from "./pages/Team";
import ActorDetail from "./pages/ActorDetail";
import PlayDetail from "./pages/PlayDetail";
import News from "./pages/News";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { fetchData } from "./reducers/dataSlice";
//Framer
import { AnimatePresence } from "framer-motion";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/plays" element={<Plays />} />
          <Route path="/plays/:slug" element={<PlayDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={<ActorDetail />} />
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
        <Footer />
      </AnimatePresence>
    </div>
  );
};

export default App;
