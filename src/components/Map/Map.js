import { useEffect } from 'react';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from 'react-leaflet'
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
const { MapContainer } = ReactLeaflet;

const Map = ({ children, className, ...rest }) => {
  const coords = useSelector((state) => state.coordinatesReducer.data);
  let mapClassName = styles.map;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
  }, []);

  function SetViewOnClick({ coords }) {
    const map = useMap();
    map.panTo(coords, 30)
    return null;
  }

  return (
    <MapContainer className={mapClassName} {...rest}>
      <SetViewOnClick coords={coords} />
      {children(ReactLeaflet)}
    </MapContainer>
  );
};

export default Map;
