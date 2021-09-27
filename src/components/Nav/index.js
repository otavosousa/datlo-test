import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Cities from '../../factories/Cities';
import NavList from '../NavList';

export default function Nav() {
  const cities = new Cities();
  const [citiesList, setCitiesList] = useState([]);
  const [page, setPage] = useState(1);

  const handleCities = async () => {
    const citiesIndex = await cities.index(page);
    setCitiesList([...citiesList, ...citiesIndex]);
    setPage(page + 1);
  };

  useEffect(() => {
    handleCities();
  }, []);

  if (citiesList.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <nav className={styles.nav}>
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
          />
        </div>
        <button
          type="button"
          className={styles.btn}
          onClick={() => console.log('oi')}
        >
          Pesquisar
        </button>
      </header>
      <main>
        <div className={styles.main}>
          <span>Encontrar cidade</span>
          <NavList list={citiesList} />
        </div>
      </main>
      <footer className={styles.footer}>
        <button
          type="button"
          className={styles.btn}
          onClick={() => handleCities()}
        >
          Carregar mais
        </button>
      </footer>
    </nav>
  );
}
