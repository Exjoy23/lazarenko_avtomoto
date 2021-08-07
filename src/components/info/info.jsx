import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './info.module.scss';

function Info() {
  return (
    <div>
      <h2 className={styles.title}>Марпех 11</h2>
      <h3 className="visually-hidden">Технические характеристики автомобиля</h3>
      <ul className={styles.list}>
        <li className={classNames(styles.item, styles.fuel)}>бензин</li>
        <li className={classNames(styles.item, styles.box)}>механика</li>
        <li className={classNames(styles.item, styles.power)}>100 л.с.</li>
        <li className={classNames(styles.item, styles.engine)}>1.4 л</li>
      </ul>
      <h3 className="visually-hidden">Цена авто Марпех 11</h3>
      <div className={styles.inner}>
        <span className={styles.price}>2&nbsp;300&nbsp;000&nbsp;&#8381;</span>
        <span className={styles.oldPrice}>
          2&nbsp;400&nbsp;000&nbsp;&#8381;
        </span>
      </div>
      <div className={styles.buttons}>
        <div>
          <Link className={classNames(styles.button, styles.request)} to="/">
            оставить заявку
          </Link>
        </div>
        <div>
          <Link className={classNames(styles.button, styles.credit)} to="/">
            в кредит от 11&nbsp;000&nbsp;&#8381;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
