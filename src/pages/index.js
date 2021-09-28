import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Map from '../components/Map';
import Nav from '../components/Nav'
import { useSelector } from 'react-redux';

export default function Home() {
  const coords = useSelector((state) => state.coordinatesReducer.data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello world</title>
        <meta name="description" content="Setup with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <Map className={styles.homeMap} center={coords} zoom={13}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={coords}>
                <Popup>A pretty CSS3 popup</Popup>
              </Marker>
            </>
          )}
        </Map>
      </main>
    </div>
  );
}
