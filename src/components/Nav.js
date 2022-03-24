import React, { useState } from "react";
//Router
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//Framer
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <nav>
      <div className="nav_container">
        <Link to="/" className="logo">
          <span>ArtRusVek</span>
          <div className="small_text">продюссерская компания</div>
        </Link>
        <button className="menu_button" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Закрыть" : "Меню"}
        </button>
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div
              className="nav_links"
              key="modal"
              initial={{
                opacity: 0,
                transition: {
                  duration: 0.75,
                },
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
                onClick={() => setIsVisible(false)}
              >
                Главная
              </NavLink>
              <NavLink
                to="/plays"
                className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
                onClick={() => setIsVisible(false)}
              >
                Спектакли
              </NavLink>
              <NavLink
                to="/team"
                className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
                onClick={() => setIsVisible(false)}
              >
                Творческая группа
              </NavLink>
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
                onClick={() => setIsVisible(false)}
              >
                Новости
              </NavLink>
              <HashLink
                to={`${location.pathname}#footer`}
                className="nav_link"
                onClick={() => setIsVisible(false)}
              >
                Контакты
              </HashLink>
              {/* <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
        >
          Войти
        </NavLink> */}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className={isVisible ? "nav_links" : "nav_links-hidden"}
          variants={variants}
          animate={isVisible ? "show" : "hidden"}
          exit={{ opacity: 0 }}
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
            onClick={() => setIsVisible(false)}
          >
            Главная
          </NavLink>
          <NavLink
            to="/plays"
            className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
            onClick={() => setIsVisible(false)}
          >
            Спектакли
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
            onClick={() => setIsVisible(false)}
          >
            Творческая группа
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
            onClick={() => setIsVisible(false)}
          >
            Новости
          </NavLink>
          <HashLink
            to={`${location.pathname}#footer`}
            className="nav_link"
            onClick={() => setIsVisible(false)}
          >
            Контакты
          </HashLink>
          {/* <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
        >
          Войти
        </NavLink> */}
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
