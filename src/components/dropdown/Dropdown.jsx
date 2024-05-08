import React, { useState, useEffect, useRef } from 'react';

import './dropdown.css';
import backpack from '../../assets/backapack.svg';
import vector from '../../assets/vector1.svg';

const Dropdown = ({ options, defaultSelected, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(defaultSelected);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (option) => {
    const index = selectedOptions.indexOf(option);
    let updatedOptions;

    if (index === -1) {
      // Если опция еще не выбрана, добавляем ее к выбранным
      updatedOptions = [...selectedOptions, option];
    } else {
      // Если опция уже выбрана, удаляем ее из выбранных
      updatedOptions = selectedOptions.filter(selectedOption => selectedOption !== option);
    }

    // Обновляем состояние выбранных опций
    setSelectedOptions(updatedOptions);

    // Вызываем onChange только с последней выбранной опцией
    onChange(option);
  };


  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-btn d-flex" onClick={() => setIsActive(!isActive)}>
        <img src={backpack} alt="Backpack" />
        <h4>{defaultSelected}</h4>
        <img className="vector" src={vector} alt="Vector" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div key={option} className="dropdown-item" onClick={() => handleClick(option)}>
              <input type="checkbox" checked={selectedOptions.includes(option)} readOnly />
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
