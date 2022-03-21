import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  const [searchText, setSearchText] = useState('')
  const [superheroData, setSuperheroData] = useState([]);

  async function searchSuperHeroes() {
    const response = await fetch(`https://www.superheroapi.com/api.php/10219177700206566/search/${searchText}`);
    const data = await response.json();
    console.log("searchSuperHeroes->data", data)
    setSuperheroData(data.results);
  }

  function handleChange(e) {
    const SerachTerm = e.target.value;

    setSearchText(SerachTerm);
    if (SerachTerm.length === 0) {
      setSuperheroData([]);
    }

    if (SerachTerm.length > 1) {
      searchSuperHeroes();
    }
  }
  return (
    <div className="App">
      <Navbar />
      <div className='page'>
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResults superheroData={superheroData} />
      </div>
    </div>
  );
}

export default App;
