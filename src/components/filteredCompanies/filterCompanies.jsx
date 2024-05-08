import React, {useRef} from 'react';
import tiktok from "../../assets/companies/tiktok.svg";
import alif from "../../assets/companies/alif.svg";
import sber from "../../assets/companies/sber.svg";
import vtb from "../../assets/companies/vtb.svg";
import tinkoff from "../../assets/companies/tinkoff.svg";
import yandex from "../../assets/companies/yandex.svg";

const FilterCompanies = ({setFoundCount, setFilteredUsers, Users}) => {
  const companyLogos = {
    tiktok: tiktok,
    alif: alif,
    sber: sber,
    vtb: vtb,
    tinkoff: tinkoff,
    yandex: yandex,
  };

  const companies = ['tiktok', 'alif', 'sber', 'vtb', 'tinkoff', 'yandex'];
  const containerRef = useRef(null);
  const handleScroll = (e) => {
    const container = containerRef.current;
    const step = 50; // Шаг прокрутки

    if (e.deltaY > 0) {
      container.scrollLeft += step; // Прокрутка вправо
    } else {
      container.scrollLeft -= step; // Прокрутка влево
    }
  };
  const filterUsersByCompany = (company) => {
    const filterUsers = Users.filter(user => {
      if (user.company) {
        const userCompanies = user.company.split(',').map(c => c.trim().toLowerCase());
        return userCompanies.includes(company.toLowerCase());
      }
      return false; // если user.company === null
    });
    setFoundCount(filterUsers.length);
    setFilteredUsers(filterUsers);
  };
  return (
    <nav className="search__companies">
      <ul className="companies__menu d-flex align-items-center" onWheel={handleScroll} ref={containerRef}>
        {companies.map(company => (
          <li key={company} className="companies__links" onClick={() => filterUsersByCompany(company)}>
            <img src={companyLogos[company]} alt={company}/>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FilterCompanies;