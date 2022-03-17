import React from "react";
//Router
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const location = useLocation();
  return (
    <nav>
      <Link to="/" className="logo">
        <span>ArtRusVek</span>
        <div className="small_text">продюссерская компания</div>
      </Link>
      <div className="nav_links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
        >
          Главная
        </NavLink>
        <NavLink
          to="/plays"
          className="nav_link"
          className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
        >
          Спектакли
        </NavLink>
        <NavLink
          to="/team"
          className="nav_link"
          className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
        >
          Творческая группа
        </NavLink>
        <NavLink
          to="/news"
          className="nav_link"
          className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
        >
          Новости
        </NavLink>
        <NavLink
          to="/admin"
          className="nav_link"
          className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")}
        >
          Войти
        </NavLink>
        <HashLink to={`${location.pathname}#footer`} className="nav_link">
          Контакты
        </HashLink>
      </div>
    </nav>
  );
};

export default Nav;
