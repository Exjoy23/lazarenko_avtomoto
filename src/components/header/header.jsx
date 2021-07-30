import React from 'react';
import Logo from '../logo/logo';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="/">Автомобили</a>
            </li>
            <li className={styles.item}>
              <a href="/">Контакты</a>
            </li>
            <li className={styles.item}>
              <a href="/">Услуги</a>
            </li>
            <li className={styles.item}>
              <a href="/">Вакансии</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
