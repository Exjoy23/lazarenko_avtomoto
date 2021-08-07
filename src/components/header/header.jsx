import React from 'react';
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
              <a className={styles.link} href="/">
                Автомобили
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Контакты
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Услуги
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
