import React from 'react';
import classNames from 'classnames';
import styles from './info.module.scss';

function Info() {
  return (
    <div>
      <h2 className={styles.title}>Марпех 11</h2>
      <ul className={styles.list}>
        <li className={styles.fuel}>бензин</li>
        <li className={styles.box}>механика</li>
        <li className={styles.power}>100 л.с.</li>
        <li className={styles.engine}>1.4 л</li>
      </ul>
      <div className={styles.inner}>
        <span className={styles.price}>2&nbsp;300&nbsp;000&nbsp;&#8381;</span>
        <span className={styles.oldPrice}>
          2&nbsp;400&nbsp;000&nbsp;&#8381;
        </span>
      </div>
      <div className={styles.buttons}>
        <a className={classNames(styles.button, styles.request)} href="/">
          оставить заявку
        </a>
        <a className={classNames(styles.button, styles.credit)} href="/">
          в кредит от 11 000&nbsp;&#8381;
        </a>
      </div>
    </div>
  );
}

export default Info;
