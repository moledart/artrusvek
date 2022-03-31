import React, { useState } from "react";
//Router
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//Framer
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const links = [
    {
      text: "Главная",
      path: "/",
    },
    {
      text: "Спектакли",
      path: "/plays",
    },
    {
      text: "Творческая группа",
      path: "/team",
    },
    {
      text: "Новости",
      path: "/news",
    },
  ];

  const navLinks = links.map((link, index) => (
    <NavLink
      to={link.path}
      className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
      onClick={() => setIsVisible(false)}
      key={index}
    >
      {link.text}
    </NavLink>
  ));

  return (
    <nav>
      <div className="nav_container">
        <Link to="/" className="logo">
          <span>ArtRusVek</span>
          <div className="small_text">продюссерская компания</div>
        </Link>
        <div className="nav_links nav_links-fs">
          {navLinks}
          <HashLink
            to={`${location.pathname}#footer`}
            className="nav_link"
            onClick={() => setIsVisible(false)}
          >
            Контакты
          </HashLink>
        </div>
        <button className="menu_button" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Закрыть" : "Меню"}
        </button>
        {isVisible && (
          <div className="nav_links">
            {navLinks}
            <HashLink
              to={`${location.pathname}#footer`}
              className="nav_link"
              onClick={() => setIsVisible(false)}
            >
              Контакты
            </HashLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
