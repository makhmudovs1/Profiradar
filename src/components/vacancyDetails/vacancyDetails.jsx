import React from 'react';
import './vacancyDetails.css';

import backpack from '../../assets/backapack.svg';

const VacancyDetails = ({vacancy}) => {
  return (
    <div className="vacancy-details">
      <div className="vacancy-apply d-flex align-items-center">
        <div className="vacancy-about">
          <h2>{vacancy.direction}</h2>
          <span>{vacancy.cost}</span>
          <div className="vacancy-experience d-flex align-items-center">
            <img src={backpack} alt="Backpack"/>
            <p>Required work experience:</p>
            <span>{vacancy.experience}</span>
          </div>
          <div className="vacancy-employment d-flex">
            <div className="employment"> Full employment </div>
            <div className="employment"> Office work </div>
          </div>
        </div>
        <div className="vacancy-btn">Apply</div>
      </div>
      <ul className="vacancy-menu">
        <h3>Responsibilities:</h3>
        <li>Разработка макетов для веб-сайтов 🖥️ </li>
        <li>Прототипирование 📝 </li>
        <li>Понимание и применение принципов UI/UX дизайна 👁️‍🗨️ </li>
        <li>Разработка концепции и прототипирование пользовательского интерфейса 🧠 </li>
        <li>Анализ, поиск идей и стилистических решений для UI 🎨 </li>
        <li>Коммуникация с заказчиками и защита проектов 👥 </li>
        <li>Составление документации к разработанным функциям и интерфейсам 📚</li>
      </ul>
      <ul className="vacancy-menu">
        <h3>Requirements:</h3>
        <li>Опыт от 1 года и с портфолио (обязательно наличие) </li>
        <li>Ответственно относиться к качеству и срокам выполнения своей работы </li>
        <li>Умение работать в сжатые сроки🗨️ </li>
        <li>Опыт работы со сложными интерфейсами и таблицами </li>
        <li>Знания в разработке адаптивного дизайна </li>
        <li>Способность адекватно воспринимать критику и замечания </li>
        <li>Способность работать как в команде, так и самостоятельно решать поставленные задачи</li>
        <li>Желания делать программные продукты лучше и понятнее для пользователей</li>
        <li>Понимания процесса определения потребностей, способности отделять потребности пользователей
          от пожеланий заказчика и умения комбинировать их в графическом интерфейсе</li>
      </ul>
      <ul className="vacancy-menu">
        <h3>Conditions:</h3>
        <li>Разработка макетов для веб-сайтов 🖥️ </li>
        <li>Прототипирование 📝 </li>
        <li>Понимание и применение принципов UI/UX дизайна 👁️‍🗨️ </li>
        <li>Разработка концепции и прототипирование пользовательского интерфейса 🧠 </li>
        <li>Анализ, поиск идей и стилистических решений для UI 🎨 </li>
        <li>Коммуникация с заказчиками и защита проектов 👥 </li>
        <li>Составление документации к разработанным функциям и интерфейсам 📚</li>
      </ul>
      <div className="teacher__skills details__skills">
        <div className="skills__link">HTML</div>
        <div className="skills__link">CSS</div>
        <div className="skills__link">JavaScript</div>
        <div className="skills__link">PostgreSQL</div>
        <div className="skills__link">React</div>
        <div className="skills__link">ThreeJS</div>
        <div className="skills__link">GitHub</div>
        <div className="skills__link">SCSS</div>
        <div className="skills__link">WordPress</div>
        <div className="skills__link">SCSS</div>
        <div className="skills__link">WordPress</div>
        <div className="skills__link">SCSS</div>
        <div className="skills__link">WordPress</div>
        <div className="skills__link">SCSS</div>
        <div className="skills__link">WordPress</div>
      </div>
    </div>
  );
};

export default VacancyDetails;