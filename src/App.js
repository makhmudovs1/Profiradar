import './App.css';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Search from "./components/search/Search";
import SearchVacancy from "./components/searchVacancy/searchVacancy";
import {useState} from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState('talents'); // talents или vacancy

  return (
    <div className="App">
     <Header/>
      {selectedTab === 'talents' &&
        <Search
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />}
      {selectedTab === 'vacancy' &&
        <SearchVacancy
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />}
     <Footer/>
    </div>
  );
}

export default App;
