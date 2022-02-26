import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
//Styles
import "./styles/app.scss";
//Components
import Home from "./pages/Home";
import Plays from "./pages/Plays";
import Team from "./pages/Team";
import News from "./pages/News";
import Nav from "./components/Nav";
//Router
import { Routes, Route } from "react-router-dom";
//Data
import { db } from "./firebase";
import { onValue, ref } from "firebase/database";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plays" element={<Plays />} />
        <Route path="/team" element={<Team />} />
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
}

export default App;
