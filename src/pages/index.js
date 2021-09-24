import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Map from '../components/Map';

const DEFAULT_CENTER = [38.907132, -77.036546];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello world</title>
        <meta name="description" content="Setup with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={DEFAULT_CENTER}>
                <Popup>A pretty CSS3 popup</Popup>
              </Marker>
            </>
          )}
        </Map>
      </main>
    </div>
  );
}
