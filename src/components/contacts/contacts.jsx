import React from 'react';
import classNames from 'classnames';
import Map from '../map/map';
import styles from './contacts.module.scss';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <h2 className="visually-hidden">Контакты</h2>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <span className={styles.title}>Адрес</span>
          <address className={styles.text}>
            Санкт-Петербург,
            <br />
            набережная реки Карповки, дом 5
          </address>
        </div>
        <div className={styles.inner}>
          <span className={styles.title}>Режим работы</span>
          <span className={styles.text}>Ежедневно, с 10:00 до 21:00</span>
        </div>
        <div className={styles.inner}>
          <span className={styles.title}>Телефон</span>
          <a
            className={classNames(styles.link, styles.text)}
            href="tel:88003335599"
          >
            8 (800) 333-55-99
          </a>
        </div>
        <div className={styles.inner}>
          <span className={styles.title}>E-mail</span>
          <a
            className={classNames(styles.link, styles.text)}
            href="mailto:info@avto-moto.ru"
          >
            info@avto-moto.ru
          </a>
        </div>
      </div>
      <div className={styles.map}>
        <Map />
      </div>
    </div>
  );
}

export default Contacts;
