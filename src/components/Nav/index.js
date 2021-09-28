import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Cities from '../../factories/Cities';
import NavMain from '../NavMain';
import NavHeader from '../NavHeader'
import NavFooter from '../NavFooter'
import NavBanner from '../NavBanner';

export default function Nav() {
  const cities = new Cities();
  const [citiesList, setCitiesList] = useState([]);
  const [pageIndexCity, setPageIndexCity] = useState(1);
  const [pageSeachCity, setPageSeachCity] = useState(1);
  const [searching, setSearching] = useState({done: false, text: ''})

  const handleIndexCities = async () => {
    const citiesIndex = await cities.index(pageIndexCity);
    setCitiesList([...citiesList, ...citiesIndex]);
    setPageIndexCity(pageIndexCity + 1)
  };

  async function handleSearchCities() {
    const citySearch = await cities.search(searching.text, pageSeachCity);
    if(pageSeachCity < citySearch.totalPages) {
      setCitiesList([...citiesList, ...citySearch.items])
      setPageSeachCity(pageSeachCity + 1)
    }
  }

  useEffect(() => {
    handleIndexCities();
  }, []);

  return (
    <nav className={styles.nav}>
      <NavHeader 
        cities={cities} 
        setList={setCitiesList} 
        setSearching={setSearching}
        page={pageSeachCity}
        setPage={setPageSeachCity}
      />
      {citiesList.length === 0 ?
        <NavBanner />
      :
        <>
          <NavMain list={citiesList}/>
          <NavFooter 
            handleLoad={searching.done ? handleSearchCities : handleIndexCities}
          />
        </>
      }
    </nav>
  );
}
