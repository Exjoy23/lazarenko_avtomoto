import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import logo from '../../assets/img/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img
          className={styles.logo}
          src={logo}
          width="132"
          height="54"
          alt="Логотип Авто-Мото"
        />
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                Автомобили
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                Контакты
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                Услуги
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                Вакансии
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
