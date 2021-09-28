import React from 'react';
import styles from './styles.module.css';

export default function NavFooter({handleLoad}) {

  return (
    <footer className={styles.footer}>
      <button
        type="button"
        className={styles.btn}
        onClick={() => handleLoad()}
      >
        Carregar mais
      </button>
    </footer>
  );
}
