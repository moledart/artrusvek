import React from "react";
//Router
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        <span>ArtRusVek</span>
        <div className="small_text">продюссерская компания</div>
      </Link>
      <div className="nav_links">
        <NavLink to="/" className="nav_link">
          Главная
        </NavLink>
        <NavLink to="/plays" className="nav_link">
          Спектакли
        </NavLink>
        <NavLink to="/team" className="nav_link">
          Творческая группа
        </NavLink>
        <NavLink to="/news" className="nav_link">
          Новости
        </NavLink>
        <NavLink to="/#footer" className="nav_link">
          Контакты
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
