import React from 'react';

import './footer.css';
import logo from '../../assets/logo.svg';
import telegram from '../../assets/telegram.svg';
import instagram from '../../assets/instagram.svg';
import inc from '../../assets/in.svg';
import arrow from '../../assets/arrow.svg';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer-nav">
          <img src={logo} alt=""/>
          <div className="footer__invest d-flex align-items-center">
            <div className="invest">
              <div className="invest__bottom d-flex align-items-center">
                Инвестировать в продукт
                <img src={arrow} alt="Arrow"/>
              </div>
            </div>
            <div className="invest-contacts">
              <ul className="d-flex">
                <li className="contacts__link">
                  <a href="#">
                    <img src={telegram} alt="Telegram"/>
                  </a>
                </li>
                <li className="contacts__link">
                  <a href="#">
                    <img src={instagram} alt="Instagram"/>
                  </a>
                </li>
                <li className="contacts__link">
                  <a href="#">
                    <img src={inc} alt="IN"/>
                  </a>
                </li>
              </ul>

            </div>
          </div>
          <div className="d-flex align-items-center justify-space-between">
            <p className="invest__text ">
              2024 | Все права защищены
            </p>
            <p className="invest__text invest__right">
              Политика конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;