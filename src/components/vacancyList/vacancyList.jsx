import React from 'react';
import './vacancyList.css';

import flag from '../../assets/flag.svg';
import apple from '../../assets/apple.svg';

const VacancyList = ({vacancies, onVacancyClick}) => {
  return (
    <div className="vacancies-list">
      {vacancies.map((vacancy, index) => (
        <div className="vacancies" key={index} onClick={() => onVacancyClick(vacancy)}>
          <div className="vacancies__info">
            <div className="vacancies__top d-flex align-items-center">
              <div className="vacancies__logo d-flex align-items-center">
                <img src={apple} alt="Apple company"/>
                <h5>Apple</h5>
              </div>
              <div className="vacancies__yesterday">Вчера</div>
            </div>
            <h2>{vacancy.job}</h2>
            <p>{vacancy.cost}</p>
          </div>
          <div className="vacancies__country d-flex align-items-center">
            <img src={flag} alt="Flag"/>
            <span>
              {vacancy.country}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VacancyList;