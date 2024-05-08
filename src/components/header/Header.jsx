import React, {useState} from 'react';

import './header.css';
import logo from '../../assets/logo.svg';
import Modal from "../modal/Modal";

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="header" id="header">
      <div className="container">
        <div className="nav d-flex align-items-center">
          <div className="nav__logo">
            <img src={logo} alt="mentoradar."/>
          </div>
          <ul className="nav__menu d-flex align-items-center">
            <li className={`menu__links ${activeMenuItem === 0 ? 'active' : ''}`}
                onClick={() => handleMenuItemClick(0)}>Как это работает</li>
            <li className={`menu__links ${activeMenuItem === 1 ? 'active' : ''}`}
                onClick={() => handleMenuItemClick(1)}>Разместить вакансию/резюме</li>
            <li className={`menu__links ${activeMenuItem === 2 ? 'active' : ''}`}
                onClick={() => handleMenuItemClick(2)}>Тарифы</li>
          </ul>
          <div className="nav__gpt d-flex align-items-center">
            <div className="nav__lang">
              RU
            </div>
            <button className="nav__btn" onClick={openModal}>
              Подберите за меня
            </button>
          </div>
          {/* Условный рендеринг модального окна */}
          {isModalOpen && <Modal onClose={closeModal} />}
        </div>
        <div className="header-main">
          <h1 className="header__title">
            Проверенные таланты и вакансии в <span>FrontEnd |</span> по вашим<br/> интересам
          </h1>
          <p className="header__text">
            Подберите проверенного эксперта с хорошим опытом работы в вашей сфере
            для работы, аутстаффинга, аутсорсинга, менторства, консультаций и других задач за пару кликов.
          </p>
          <div className="header__btn">
            Найти
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;