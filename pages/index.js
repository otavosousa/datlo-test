import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello world</title>
        <meta name="description" content="Setup with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello world!</h1>
      </main>
    </div>
  );
}
