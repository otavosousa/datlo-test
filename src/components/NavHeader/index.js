import React, { useState } from 'react';
import styles from './styles.module.css';

export default function NavHeader({cities, setList, setSearching, setPage, page}) {
  const [text, setText] = useState('')

  async function handleSearchCities() {
    if(text.length > 0){
      setSearching({done: true, text})
      const citySearch = await cities.search(text, page);
      setList(citySearch.items)
      setPage(page + 1)
    }
  }

  async function handleClearSearch() {
    if(text) {
      const citiesIndex = await cities.index();
      setList([]);
      setList(citiesIndex);
      setSearching(({done: false, text: ''}))
      setText('')
      setPage(1);
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <img
          src="/assets/search.svg"
          alt="search"
          className={styles.searchIcon}
        />
        <input
          placeholder="Cidade, código IBGE ou UF"
          type="text"
          className={styles.searchInput}
          value={text}
          onKeyPress={(e) => e.code === 'Enter' && handleSearchCities()}
          onChange={(e) => {
            setText(e.target.value)
            setPage(1)
          }}
        />
        {text.length > 0 && 
          <button type="button" onClick={handleClearSearch}>
            <img
              src="/assets/del.svg"
              alt="search"
              className={styles.delIcon}
            />
          </button>
        }
      </div>
      <button
        type="button"
        className={styles.btn}
        onClick={() => handleSearchCities()}
      >
        Pesquisar
      </button>
    </header>
  );
}
