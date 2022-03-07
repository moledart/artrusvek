import React from "react";
//Router
import { Link, NavLink } from "react-router-dom";
//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="columns">
        <div className="footer_column">
          <Link to="/" className="logo">
            <span>ArtRusVek</span>
            <div className="small_text">продюссерская компания</div>
          </Link>
        </div>
        <div className="footer_column">
          <h4>Карта сайта</h4>
          <ul>
            <Link to="/" className="nav_link">
              Главная
            </Link>
            <Link to="/plays" className="nav_link">
              Спектакли
            </Link>
            <Link to="/team" className="nav_link">
              Творческая группа
            </Link>
            <Link to="/news" className="nav_link">
              Новости
            </Link>
          </ul>
        </div>
        <div className="footer_column">
          <h4>Контакты</h4>
          <div className="contacts_wrapper">
            <div className="contact_greeting">
              <p>По вопросам сотрудничества нас можно найти по следующим координатам</p>
            </div>
            <div className="contacts">
              <div className="contact">
                <FontAwesomeIcon icon={faAt} size="2x" className="contact_icon" />
                <a href="tel:+79263027135">+7(926) 302-71-35</a>
              </div>
              <div className="contact">
                <FontAwesomeIcon icon={faPhone} size="2x" className="contact_icon" />
                <a href="mailto:lazarevarusvek@mail.ru">lazarevarusvek@mail.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
