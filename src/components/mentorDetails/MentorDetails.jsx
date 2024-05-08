import React from 'react';

import './MentorDetails.css';
import '../mentorList/MentorList.css';
import user from '../../assets/user.svg';
import cases from '../../assets/case.svg';
const MentorDetails = ({ mentor }) => {
  return (
    <div className="mentor-details">
        <div className="details">
          <div className="details__resume d-flex align-items-center">
            <h1 className="teacher__name">{mentor.name}</h1>
            <a href="#">Ссылка на резюме</a>
          </div>
          <h3 className="teacher__job">{mentor.job} разработчик</h3>
          <div className="details__pay d-flex">
            <div>
              <h4>Стоимость: <span>{mentor.price}</span></h4>
            </div>
            <div className="details-margin d-flex">
              <img className="teacher__img" src={user} alt="User"/>
              <h4>Проведено менторств: 5</h4>
            </div>
          </div>
          <div className="details__pay d-flex">
            <div>
              <h4>Опыт: {mentor.experience}</h4>
            </div>
            <div className="details-margin little d-flex">
              <img className="teacher__img" src={cases} alt="Cases"/>
              <h4>Выполнено проектов: 5</h4>
            </div>
          </div>
          <p className="details__text">При найме, специалист переходит в вашу компанию на full-time. Цену за найм вы платите Mentoradar за использование
            сервиса и проведение интервью в случае, если кандидат вам подошел. Желаемую ЗП/месяц кандидата в СV
          </p>
          <h2>О себе</h2>
          <p className="another__text">
            Занимаюсь веб-разработкой с 2005 года. Имею профильное высшее образование в сфере программирования. Начинал с фриланса будучи школьником, а позже "вырастил" успешную веб-студию.
            <br/><br/>
            На данный момент развиваю свои проекты и работаю на аутсорсе программистом.  Богатый опыт работы PHP разработчиком (зачастую даже FullStack) от фриланса до больших продуктов с миллионами пользователей и большой командой разработчиков.  Основной стек: PHP, SQL (MySQL, Postgresql), JS  Доп стек (небольшое количество знаний, но достаточное для реализации мелких задач): Ruby, Java.
            <br/><br/>
            Люблю изучать новые направления, занимался рекрутингом и знаю подводные камни поиска работы разработчиком, общаюсь с HR'ами.  Помимо разработки, есть огромный опыт в SEO, настройке контекстной и таргетированной рекламы, работы с CPA-сетями.  Хобби - 3d-принтеры, ЧПУ-станки, игра на элетро-гитаре, фото.
          </p>
          <h2>С чем могу помочь?</h2>
          <ul className="details__menu">
            <li>
              Помогаю людям найти работу в IT
            </li>
            <li>
              Помогу с подбором стека для старта в IT (не обязательно это будет PHP, Java или еще что-то из популярного) -
              после общения я дам рекомендации и буду сопровождать вас в получении знаний.
            </li>
            <li>
              Сопровожу от первых знаний до трудоустройства, а уже после трудоустройства буду
              сопровождать советами о том куда дальше расти
            </li>
            <li>
              Помогу HR-отделам в оценке будущего работника, дам советы по поиску и оценке знаний и компетенций.
            </li>
            <li>
              Проведу расширенное code-review
            </li>
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
    </div>
  );
};

export default MentorDetails;