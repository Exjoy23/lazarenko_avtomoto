import React from 'react';
import logo from '../../assets/img/logo.svg';
import styles from './logo.module.scss';

function Logo() {
  return (
    <a href="/">
      <img
        className={styles.logo}
        src={logo}
        width="132"
        height="54"
        alt="Логотип Авто-Мото"
      />
    </a>
  );
}

export default Logo;