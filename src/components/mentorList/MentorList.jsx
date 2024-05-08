import React, {useState} from 'react';

import logo from '../../assets/techer.svg';
import './MentorList.css';
import Modal from "../modal/Modal";
const MentorList = ({ mentors, setSelectedMentor }) => {
  const [selectedMentorId, setSelectedMentorId] = useState(null);
  // Обработчик клика по блоку ментора
  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
    setSelectedMentorId(mentor.id);
  };

  const [modalVisible, setModalVisible] = useState(false); // Состояние видимости модального окна
  const handleOpenModal = () => {
    setModalVisible(true); // Открываем модальное окно при клике на кнопку
  };
  const handleCloseModal = () => {
    setModalVisible(false); // Закрываем модальное окно
  };
  return (
    <div className="mentor-list">
      {mentors.map((mentor) => (
        <div className={`lists ${selectedMentorId === mentor.id ? 'selected' : ''}`}
             key={mentor.id}
             onClick={() => handleMentorClick(mentor)}>
          <div className="teacher">
            <div className="block d-flex">
              <div className="teacher__logo">
                <img src={logo} alt="logo"/>
              </div>
              <div className="teacher__info">
                <div className="circle">
                  <div className="range"></div>
                </div>
                <h2 className="teacher__name">{mentor.name}</h2>
                <h3 className="teacher__job">{mentor.job} разработчик</h3>
                <h4 className="teacher__location">{mentor.company}</h4>
                <p className="teacher__text">{mentor.info}</p>
              </div>
            </div>
            <div className="d-flex justify-space-between">
              <div className="teacher__skills">
                <div className="skills__link">HTML</div>
                <div className="skills__link">CSS</div>
                <div className="skills__link">JavaScript</div>
                <div className="skills__link">PostgreSQL</div>
                <div className="skills__link">React</div>
                <div className="skills__link">ThreeJS</div>
                <div className="skills__link">GitHub</div>
                <div className="skills__link">SCSS</div>
                <div className="skills__link">WordPress</div>
              </div>
              <div>
                <p className="teacher__price">{mentor.price}</p>
                {/* Кнопка, при клике на которую открывается модальное окно */}
                <button className="teacher__btn" onClick={handleOpenModal}>Выбрать эксперта</button>
                {/* Условный рендеринг модального окна */}
                {modalVisible && <Modal onClose={handleCloseModal} />}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MentorList;