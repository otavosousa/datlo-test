import React from 'react';
import styles from './styles.module.css';
import City from '../../factories/City';
import { useDispatch, useSelector } from 'react-redux';

export default function NavList({ list }) {

  const city = new City();
  const dispatch = useDispatch();

  async function handleCity(ibgeCode) {
    const cityShow = await city.show(ibgeCode);

    const coordinates = [
      cityShow.centroide.latitude,
      cityShow.centroide.longitude,
    ];

    dispatch({
      type: 'SET_COORDINATES',
      data: coordinates,
    });

    // console.log(coordinates)
  }

  return (
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
              <span>{`Estado: ${city.state}`}</span>
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
              onClick={() => handleCity(city.ibgeCode)}
            >
              Ver no mapa
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
