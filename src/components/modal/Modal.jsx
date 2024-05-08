import React, { useState } from 'react';
import './modal.css';

const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    telegram: '',
    id: '',
    task: '',
    about: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка отправки данных формы
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Закрываем модальное окно при клике вне его
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        {/*<span className="close" onClick={onClose}>&times;</span>*/}
        <h2 className="modal-title">Мы свяжемся с вами в течении 15 <br/>минут</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input className="form__input" type="text" name="name" placeholder="Имя" value={formData.name} onChange={handleChange} />
          <input className="form__input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input className="form__input" type="text" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} />
          <input className="form__input" type="text" name="telegram" placeholder="Ник в телеграм @nick" value={formData.telegram} onChange={handleChange} />
          <input className="form__input" type="text" name="id" placeholder="ID1234" value={formData.id} onChange={handleChange} />
          <select name="task" value={formData.task} onChange={handleChange}>
            <option value="">Что нужно сделать</option>
            <option value="Задача 1">Задача 1</option>
            <option value="Задача 2">Задача 2</option>
            <option value="Задача 3">Задача 3</option>
          </select>
          <textarea name="about" placeholder="Расскажите про себя и про то с какой целью вам нужен специалист. Если вы компания то расскажите про задачи." value={formData.about} onChange={handleChange} />
          <p className="form__text">
            Отправляя форму вы принимаете<br/> <span>политику конфиденциальности данных.</span>
          </p>
          <button className="form__btn" type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
