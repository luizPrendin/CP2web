import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CSS/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>GaRaTo Store</h1>
      <nav>
        <Link to="/" className={styles.headerLink}>
          Home
        </Link>
        <Link to="/aparelhos" className={styles.headerLink}>
          Aparelhos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
