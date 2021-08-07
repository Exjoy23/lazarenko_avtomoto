import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              Корпоративным клиентам
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              Клиентам
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              Аренда авто
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              Каршеринг
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              Как продать авто
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              Trade-in
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              Test drive
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
