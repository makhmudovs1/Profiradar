import React, {useState} from 'react';
import './searchIInput.css';

const SearchInput = ({Users, foundCount, setFoundCount, setFilteredUsers, selectedTab, setSelectedTab}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAnimation, setShowAnimation] = useState(false); // Состояние для управления анимацией

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(event.target.value);
    const filteredUsers = Users.filter(user =>
      user.job.toLowerCase().includes(newSearchTerm)
    );
    setFoundCount(filteredUsers.length);
    setFilteredUsers(filteredUsers);
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="profession d-flex align-items-center">
      <div className="input-btn">
        <input
          className="search__input"
          type="text"
          autoFocus
          placeholder="Название должности на English"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="wrapper d-flex">
        <button
          className={`tab-button ${selectedTab === 'talents' ? 'active' : ''}`}
          onClick={() => handleTabChange('talents')}
        >
          Таланты
        </button>
        <button className={`tab-button ${selectedTab === 'vacancy' ? 'active' : ''}`}
              onClick={() => handleTabChange('vacancy')}
        >
          Вакансии
        </button>
      </div>
      <div className="filter">
        <span className={`search__count ${showAnimation ? 'animate' : ''}`}>
          Всего {foundCount}
        </span>
      </div>
    </div>
  );
};

export default SearchInput;