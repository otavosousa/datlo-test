import React from 'react'
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import DefineMap from './define'

export default function Map(){

    const coords = useSelector((state) => state.coordinatesReducer.data);
    const multiPolygon = useSelector((state) => state.polygonReducer.data);

    return (
        <DefineMap className={styles.homeMap} center={coords} zoom={12}>
          {({ TileLayer, Marker, Popup, Polygon }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />

              {multiPolygon.length > 0 && multiPolygon.map((polygon, index) => {
                return (
                  <Polygon 
                    pathOptions={{ color: 'purple' }} 
                    positions={[polygon.geometry.coordinates[0][0].map(coordinates => {
                      return [coordinates[1], coordinates[0]]
                    })]}
                    key={index}
                  >
                    <Popup>{`
                      População: ${polygon.properties.population}
                      Renda média: ${polygon.properties.averageincome}
                    `}</Popup>
                  </Polygon>
                )
              })}
            </>
          )}
        </DefineMap>
    )
}

