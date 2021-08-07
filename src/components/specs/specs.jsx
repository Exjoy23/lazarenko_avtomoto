import React from 'react';
import styles from './specs.module.scss';

function Specs() {
  return (
    <div className={styles.wrapper}>
      <h2 className="visually-hidden">Характеристики</h2>
      <dl className={styles.list}>
        <dt className={styles.term}>Трансмиссия</dt>
        <dd className={styles.definition}>Роботизированная</dd>
        <dt className={styles.term}>Мощность двигателя, л.с.</dt>
        <dd className={styles.definition}>249</dd>
        <dt className={styles.term}>Тип двигателя</dt>
        <dd className={styles.definition}>Бензиновый</dd>
        <dt className={styles.term}>Привод</dt>
        <dd className={styles.definition}>Полный</dd>
        <dt className={styles.term}>Объем двигателя, л</dt>
        <dd className={styles.definition}>2.4</dd>
        <dt className={styles.term}>Макс. крутящий момент</dt>
        <dd className={styles.definition}>370/4500</dd>
        <dt className={styles.term}>Количество цилиндров</dt>
        <dd className={styles.definition}>4</dd>
      </dl>
    </div>
  );
}

export default Specs;
