import React, { useState } from 'react';
import VacancyList from "../vacancyList/vacancyList";
import VacancyDetails from "../vacancyDetails/vacancyDetails";
import { vacancy } from '../../vacancy';
import FilterCompanies from "../filteredCompanies/filterCompanies";
import SearchInput from "../searchInput/searchInput";
import Dropdown from "../dropdown/Dropdown";

const SearchVacancy = ({selectedTab, setSelectedTab}) => {
  const [vacancies, setVacancies] = useState(vacancy);
  const [selectedVacancy, setSelectedVacancy] = useState(vacancies[0]);

  const [count, setFoundCount] = useState(vacancy.length);

  const handleVacancyClick = (vacancy) => {
    setSelectedVacancy(vacancy);
  };

  const option5 = ['1-3 года', '3-6 лет', '6-10 лет', '10+'];
  const option1 = ['Alif', 'Tik Tok', 'Yandex', 'Sberbank', 'Vtb'];
  const option2 = ['Fintech', 'EdTech', 'Ai & ML', 'Blockchain & Crypto', 'HRtech', 'AdTech'];
  const option3 = ['1700руб/час', '1500руб/час', '2700руб/час', '5700руб/час', '3750руб/час'];
  const option4 = ['20 часов', '30 часов', 'Полная занятость', '40 часов', 'Работа в Офисе'];
  const option6 = ['Россия', 'Казахстан', 'Армения', 'ОАЭ, Дубаи'];
  const [selectedOptions5,] = useState(['Опыт работы']);
  const [selectedOptions2,] = useState(['Индустрия']);
  const [selectedOptions3,] = useState(['Цена']);
  const [selectedOptions4,] = useState(['Формат']);
  const [selectedOptions1,] = useState(['Компания']);
  const [selectedOptions6,] = useState(['Локация']);
  const [selectedOption, setSelectedOption] = useState({
    experience: [],
    industry: [],
    price: [],
    format: [],
    company: [],
    location: [],
  });

  const handleOption1Changes = (option) => {
    // Создаем копию строки выбранных компаний
    let updatedExperience = selectedOption.experience;
    const index = updatedExperience.indexOf(option);

    // Если компания уже выбрана, удаляем ее из строки, иначе добавляем
    if (index !== -1) {
      updatedExperience = updatedExperience.replace(option, '').replace(/\s*,\s*$/, '').replace(/^\s*,\s*/, '');
    } else {
      updatedExperience = updatedExperience ? `${updatedExperience}, ${option}` : option;
    }

    // Обновляем состояние выбранных опций
    setSelectedOption(prevOptions => ({ ...prevOptions, experience: updatedExperience }));

    // Вызываем filterUsers только после обновления состояния selectedOptions
    filterUsers({ ...selectedOption, experience: updatedExperience });
  };
  const handleOption2Changes = (option) => {
    // Создаем копию массива выбранных индустрий
    const updatedIndustry = [...selectedOption.industry];
    const index = updatedIndustry.indexOf(option);
    // Если индустрия уже выбрана, удаляем ее из массива, иначе добавляем
    if (index !== -1) {
      updatedIndustry.splice(index, 1);
    } else {
      updatedIndustry.push(option);
    }

    // Обновляем состояние выбранных опций
    setSelectedOption(prevOptions => ({ ...prevOptions, industry: updatedIndustry }));

    // Вызываем filterUsers только после обновления состояния selectedOptions
    filterUsers({ ...selectedOption, industry: updatedIndustry });
  };

  const handleOption3Changes = (option) => {
    // Создаем копию массива выбранных цен
    const updatedPrice = [...selectedOption.price];
    const index = updatedPrice.indexOf(option);

    // Если цена уже выбрана, удаляем ее из массива, иначе добавляем
    if (index !== -1) {
      updatedPrice.splice(index, 1);
    } else {
      updatedPrice.push(option);
    }

    // Обновляем состояние выбранных опций
    setSelectedOption(prevOptions => ({ ...prevOptions, price: updatedPrice }));

    // Вызываем filterUsers только после обновления состояния selectedOptions
    filterUsers({ ...selectedOption, price: updatedPrice });
  };

  const handleOption4Changes = (option) => {
    const updatedFormat = [...selectedOption.format];
    const index = updatedFormat.indexOf(option);
    if (index !== -1) {
      updatedFormat.splice(index, 1);
    } else {
      updatedFormat.push(option);
    }
    setSelectedOption(prevOptions => ({ ...prevOptions, format: updatedFormat }));
    filterUsers({ ...selectedOption, format: updatedFormat });
  };

  const handleOption5Changes = (option) => {
    const updatedCompany = [...selectedOption.company];
    const index = updatedCompany.indexOf(option);
    if (index !== -1) {
      updatedCompany.splice(index, 1);
    } else {
      updatedCompany.push(option);
    }
    setSelectedOption(prevOptions => ({ ...prevOptions, company: updatedCompany }));
    filterUsers({ ...selectedOption, company: updatedCompany });
  };
  const handleOption6Changes = (option) => {
    const updatedLocation = [...selectedOption.location];
    const index = updatedLocation.indexOf(option);
    if (index !== -1) {
      updatedLocation.splice(index, 1);
    } else {
      updatedLocation.push(option);
    }
    setSelectedOption(prevOptions => ({ ...prevOptions, location: updatedLocation }));
    filterUsers({ ...selectedOption, location: updatedLocation });
  };
  const filterUsers = (selectedOptions) => {
    const { experience, industry, price, format, company, location } = selectedOptions;

    // Функция для проверки, соответствует ли пользователь всем выбранным опциям
    const userMatchesFilters = (user) => {
      let selectedCompanies = [];
      if (company.length !== 0) {
        selectedCompanies = company;
      }
      const companiesMatch = !company.length ||
        !selectedCompanies.length ||
        (user.company &&
          selectedCompanies.some(selectedCompany =>
            user.company.split(',').map(c => c.trim()).includes(selectedCompany)));

      // Проверяем, входит ли значение user.industry в массив выбранных индустрий
      const industryMatch = !industry.length || industry.includes(user.industry);

      // Проверяем, входит ли значение user.price в массив выбранных цен
      const priceMatch = !price.length || price.includes(user.price);

      // Проверяем, входит ли значение user.sex в массив выбранных полов
      const formatMatch = !format.length || format.includes(user.format);

      // Проверяем, входит ли значение user.experience в массив выбранных опытов работы
      const experienceMatch = !experience.length || experience.includes(user.experience);

      // Проверяем, входит ли значение user.country в массив выбранных стран
      const companyMatch = !company.length || company.includes(user.company);

      // Проверяем, входит ли значение user.language в массив выбранных языков
      const locationMatch = !location.length || location.includes(user.location);

      return companiesMatch &&
        industryMatch &&
        priceMatch &&
        formatMatch &&
        experienceMatch &&
        companyMatch &&
        locationMatch;
    };

    // Применяем фильтр к списку пользователей
    const filteredUsers = vacancy.filter(user => userMatchesFilters(user));
    setVacancies(filteredUsers);
    setFoundCount(filteredUsers.length);
  };

  return (
    <div className="search-vacancy" style={{padding: '50px 0'}}>
      <div className="container">
        <FilterCompanies
          setFoundCount={setFoundCount}
          setFilteredUsers={setVacancies}
          Users={vacancy}
        />
        <SearchInput
          Users={vacancy}
          foundCount={count}
          setFilteredUsers={setVacancies}
          setFoundCount={setFoundCount}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="search-dropdowns d-flex">
          <Dropdown options={option1} defaultSelected={selectedOptions1} onChange={handleOption1Changes} />
          <Dropdown options={option2} defaultSelected={selectedOptions2} onChange={handleOption2Changes} />
          <Dropdown options={option3} defaultSelected={selectedOptions3} onChange={handleOption3Changes} />
          <Dropdown options={option4} defaultSelected={selectedOptions4} onChange={handleOption4Changes} />
          <Dropdown options={option5} defaultSelected={selectedOptions5} onChange={handleOption5Changes} />
          <Dropdown options={option6} defaultSelected={selectedOptions6} onChange={handleOption6Changes} />
        </div>
        <div className="vacancy-search d-flex">
          <VacancyList vacancies={vacancies} onVacancyClick={handleVacancyClick} />
          <VacancyDetails vacancy={selectedVacancy}/>
        </div>
      </div>
    </div>
  );
};

export default SearchVacancy;
