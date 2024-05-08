import React, {useEffect, useState} from 'react';

import './search.css';
import {Users} from '../../users';
import MentorList from "../mentorList/MentorList";
import MentorDetails from "../mentorDetails/MentorDetails";
import Dropdown from "../dropdown/Dropdown";
import FilterCompanies from "../filteredCompanies/filterCompanies";
import SearchInput from "../searchInput/searchInput";

const Search = ({selectedTab, setSelectedTab}) => {
  const [selectedMentor, setSelectedMentor] = useState(Users);
  const [foundCount, setFoundCount] = useState(Users.length);
  const [filteredUsers, setFilteredUsers] = useState(Users); // Одно состояние для отфильтрованных пользователей

  useEffect(() => {
    setFoundCount(filteredUsers.length);
  }, [filteredUsers]);

  useEffect(() => {
    setFoundCount(filteredUsers.length);
  }, [filteredUsers]);

  const options1 = ['Alif', 'Tik Tok', 'Yandex', 'Sberbank', 'Vtb'];
  const options2 = ['Fintech', 'EdTech', 'Ai & ML', 'Blockchain & Crypto', 'HRtech', 'AdTech'];
  const options3 = ['1700руб/час', '1500руб/час', '2700руб/час', '5700руб/час', '3750руб/час'];
  const options4 = ['Мужчина', 'Женщина'];
  const options5 = ['1-3 года', '3-6 лет', '6-10 лет', '10+'];
  const options6 = ['Россия', 'Казахстан', 'Армения', 'ОАЭ'];
  const options7 = ['Русский', 'Английский', 'Казахский', 'Арабский'];
  const [selectedOption1,] = useState(['Компания']);
  const [selectedOption2,] = useState(['Индустрия']);
  const [selectedOption3,] = useState(['Цена']);
  const [selectedOption4,] = useState(['Пол']);
  const [selectedOption5,] = useState(['Опыт работы']);
  const [selectedOption6,] = useState(['Страна']);
  const [selectedOption7,] = useState(['Язык']);
  const [selectedOptions, setSelectedOptions] = useState({
    company: [],
    industry: [],
    price: [],
    sex: [],
    experience: [],
    country: [],
    language: [],
  });

  const handleOption1Change = (option) => {
    // Создаем копию строки выбранных компаний
    let updatedCompany = selectedOptions.company;
    const index = updatedCompany.indexOf(option);

    // Если компания уже выбрана, удаляем ее из строки, иначе добавляем
    if (index !== -1) {
      updatedCompany = updatedCompany.replace(option, '').replace(/\s*,\s*$/, '').replace(/^\s*,\s*/, '');
    } else {
      updatedCompany = updatedCompany ? `${updatedCompany}, ${option}` : option;
    }

    // Обновляем состояние выбранных опций
    setSelectedOptions(prevOptions => ({ ...prevOptions, company: updatedCompany }));

    // Вызываем filterUsers только после обновления состояния selectedOptions
    filterUsers({ ...selectedOptions, company: updatedCompany });
  };
  const handleOption2Change = (option) => {
    // Создаем копию массива выбранных индустрий
    const updatedIndustry = [...selectedOptions.industry];
    const index = updatedIndustry.indexOf(option);
    // Если индустрия уже выбрана, удаляем ее из массива, иначе добавляем
    if (index !== -1) {
      updatedIndustry.splice(index, 1);
    } else {
      updatedIndustry.push(option);
    }

    // Обновляем состояние выбранных опций
    setSelectedOptions(prevOptions => ({ ...prevOptions, industry: updatedIndustry }));

    // Вызываем filterUsers только после обновления состояния selectedOptions
    filterUsers({ ...selectedOptions, industry: updatedIndustry });
  };

  const handleOption3Change = (option) => {
    // Создаем копию массива выбранных цен
    const updatedPrice = [...selectedOptions.price];
    const index = updatedPrice.indexOf(option);

    // Если цена уже выбрана, удаляем ее из массива, иначе добавляем
    if (index !== -1) {
      updatedPrice.splice(index, 1);
    } else {
      updatedPrice.push(option);
    }

    // Обновляем состояние выбранных опций
    setSelectedOptions(prevOptions => ({ ...prevOptions, price: updatedPrice }));

    // Вызываем filterUsers только после обновления состояния selectedOptions
    filterUsers({ ...selectedOptions, price: updatedPrice });
  };

  const handleOption4Change = (option) => {
    const updatedSex = [...selectedOptions.sex];
    const index = updatedSex.indexOf(option);
    if (index !== -1) {
      updatedSex.splice(index, 1);
    } else {
      updatedSex.push(option);
    }
    setSelectedOptions(prevOptions => ({ ...prevOptions, sex: updatedSex }));
    filterUsers({ ...selectedOptions, sex: updatedSex });
  };

  const handleOption5Change = (option) => {
    const updatedExperience = [...selectedOptions.experience];
    const index = updatedExperience.indexOf(option);
    if (index !== -1) {
      updatedExperience.splice(index, 1);
    } else {
      updatedExperience.push(option);
    }
    setSelectedOptions(prevOptions => ({ ...prevOptions, experience: updatedExperience }));
    filterUsers({ ...selectedOptions, experience: updatedExperience });
  };

  const handleOption6Change = (option) => {
    const updatedCountry = [...selectedOptions.country];
    const index = updatedCountry.indexOf(option);
    if (index !== -1) {
      updatedCountry.splice(index, 1);
    } else {
      updatedCountry.push(option);
    }
    setSelectedOptions(prevOptions => ({ ...prevOptions, country: updatedCountry }));
    filterUsers({ ...selectedOptions, country: updatedCountry });
  };

  const handleOption7Change = (option) => {
    const updatedLanguage = [...selectedOptions.language];
    const index = updatedLanguage.indexOf(option);
    if (index !== -1) {
      updatedLanguage.splice(index, 1);
    } else {
      updatedLanguage.push(option);
    }
    setSelectedOptions(prevOptions => ({ ...prevOptions, language: updatedLanguage }));
    filterUsers({ ...selectedOptions, language: updatedLanguage });
  };

  const filterUsers = (selectedOptions) => {
    const { company, industry, price, sex, experience, country, language } = selectedOptions;

    // Функция для проверки, соответствует ли пользователь всем выбранным опциям
    const userMatchesFilters = (user) => {
      let selectedCompanies = [];
      if (company.length != []) {
        selectedCompanies = company.split(',').map(c => c.trim());
      }
      const companiesMatch = !company ||
        !selectedCompanies.length ||
        (user.company &&
          selectedCompanies.some(selectedCompany =>
            user.company.split(',').map(c => c.trim()).includes(selectedCompany)));

      // Проверяем, входит ли значение user.industry в массив выбранных индустрий
      const industryMatch = !industry.length || industry.includes(user.industry);

      // Проверяем, входит ли значение user.price в массив выбранных цен
      const priceMatch = !price.length || price.includes(user.price);

      // Проверяем, входит ли значение user.sex в массив выбранных полов
      const sexMatch = !sex.length || sex.includes(user.sex);

      // Проверяем, входит ли значение user.experience в массив выбранных опытов работы
      const experienceMatch = !experience.length || experience.includes(user.experience);

      // Проверяем, входит ли значение user.country в массив выбранных стран
      const countryMatch = !country.length || country.includes(user.country);

      // Проверяем, входит ли значение user.language в массив выбранных языков
      const languageMatch = !language.length || language.includes(user.language);

      return companiesMatch &&
        industryMatch &&
        priceMatch &&
        sexMatch &&
        experienceMatch &&
        countryMatch &&
        languageMatch;
    };

    // Применяем фильтр к списку пользователей
    const filteredUsers = Users.filter(user => userMatchesFilters(user));
    setFilteredUsers(filteredUsers);
  };

  return (
    <div className="search" id="search">
      <div className="container">
        <FilterCompanies
          setFilteredUsers={setFilteredUsers}
          setFoundCount={setFoundCount}
          Users={Users}
        />
        <SearchInput
          Users={Users}
          foundCount={foundCount}
          setFilteredUsers={setFilteredUsers}
          setFoundCount={setFoundCount}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="search-dropdowns d-flex">
          <Dropdown options={options1} defaultSelected={selectedOption1} onChange={handleOption1Change} />
          <Dropdown options={options2} defaultSelected={selectedOption2} onChange={handleOption2Change} />
          <Dropdown options={options3} defaultSelected={selectedOption3} onChange={handleOption3Change} />
          <Dropdown options={options4} defaultSelected={selectedOption4} onChange={handleOption4Change} />
          <Dropdown options={options5} defaultSelected={selectedOption5} onChange={handleOption5Change} />
          <Dropdown options={options6} defaultSelected={selectedOption6} onChange={handleOption6Change} />
          <Dropdown options={options7} defaultSelected={selectedOption7} onChange={handleOption7Change} />
        </div>
        <div className="profession-users d-flex">
          <MentorList mentors={filteredUsers} setSelectedMentor={setSelectedMentor} />
          <MentorDetails mentor={selectedMentor} />
        </div>
        <hr/>
      </div>
    </div>
  );
};

export default Search;
