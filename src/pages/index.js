import React from 'react';
import Head from 'next/head';
import styles from './styles.module.css';
import Map from '../components/Map';
import Nav from '../components/Nav'
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';


export default function Home() {

  const loading = useSelector((state) => state.loadingReducer.data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mapa</title>
        <meta name="description" content="Mapa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {loading && <Loading />}
        <Nav />
        <Map />
      </main>
    </div>
  );
}
