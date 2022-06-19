import { useState,useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters=monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField)
  })

  return (
    <div className="App">
      <h1 className="app-title">Monsters-Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="monster-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
