import React from 'react';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              Корпоративным клиентам
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              Клиентам
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              Аренда авто
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              Каршеринг
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              Как продать авто
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              Trade-in
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              Test drive
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
