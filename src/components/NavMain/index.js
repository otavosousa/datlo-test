import React from 'react';
import styles from './styles.module.css';
import City from '../../factories/City';
import { useDispatch } from 'react-redux';

export default function NavMain({ list }) {

  const city = new City();
  const dispatch = useDispatch();

  async function handleLoadCity(ibgeCode) {
    dispatch({
      type: 'SET_LOADING',
      data: true,
    });
    
    const cityCoords = await city.getCoords(ibgeCode);
    const cityShow = await city.show(ibgeCode);

    if(cityShow) {
      const cityShowData = await cityShow.features
      dispatch({
        type: 'SET_POLYGON',
        data: cityShowData,
      });
    }

    dispatch({
      type: 'SET_COORDINATES',
      data: cityCoords,
    });

    setTimeout(() => {
      dispatch({
        type: 'SET_LOADING',
        data: false,
      });
    }, 1000)


  }

  return (
    <main className={styles.main}>
      <span>Encontrar cidade</span>
      <ul className={styles.ul}>
        {list.map((city) => (
          <li className={styles.citiesContainer} key={city.id}>
            <div
              className={styles.citieLabelContainer}
              style={{ backgroundColor: '#2EB87C' }}
            >
              <div className={styles.citieLabelIconContainer}>
                <img
                  src="/assets/pin-label.png"
                  className={styles.citieLabelIcon}
                  alt="pin"
                />
              </div>
              <span>{city.name}</span>
            </div>

            <div className={styles.citieDescriptionContainer}>
              <div className={styles.citieDescriptionText}>
                <img
                  src="/assets/pin-state.png"
                  className={styles.citieDescriptionIcon}
                  alt="pin"
                />
                <span>{`Estado: ${city.state.length <= 14 ? city.state : `${city.state.slice(0, 14)}...` }`}</span>
              </div>
              <div className={styles.citieDescriptionText}>
                <img
                  src="/assets/pin-code.png"
                  className={styles.citieDescriptionIcon}
                  alt="pin"
                />
                <span>{`Código IBGE: ${city.ibgeCode}`}</span>
              </div>
              <button
                className={styles.citieDescriptionLink}
                onClick={() => handleLoadCity(city.ibgeCode)}
              >
                Ver no mapa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
