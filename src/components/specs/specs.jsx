import React from 'react';
import styles from './specs.module.scss';

function Specs() {
  return (
    <div className={styles.tableInner}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.data}>Трансмиссия</td>
            <td className={styles.data}>Роботизированная</td>
          </tr>
          <tr>
            <td className={styles.data}>Мощность двигателя, л.с.</td>
            <td className={styles.data}>249</td>
          </tr>
          <tr>
            <td className={styles.data}>Тип двигателя</td>
            <td className={styles.data}>Бензиновый</td>
          </tr>
          <tr>
            <td className={styles.data}>Привод</td>
            <td className={styles.data}>Полный</td>
          </tr>
          <tr>
            <td className={styles.data}>Объем двигателя, л</td>
            <td className={styles.data}>2.4</td>
          </tr>
          <tr>
            <td className={styles.data}>Макс. крутящий момент</td>
            <td className={styles.data}>370/4500</td>
          </tr>
          <tr>
            <td className={styles.data}>Количество цилиндров</td>
            <td className={styles.data}>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Specs;
