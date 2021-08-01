import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './tabs.module.scss';
import Contacts from '../contacts/contacts';

const TAB_1 = 1;
const TAB_2 = 2;
const TAB_3 = 3;

function Tabs() {
  const [activeTab, setActiveTab] = useState(TAB_1);

  const onButtonClick = (evt) => {
    const tab = +evt.target.dataset.tab;
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.inner}>
        <button
          className={classNames(styles.button, {
            [styles.buttonActive]: activeTab === TAB_1,
          })}
          onClick={onButtonClick}
          type="button"
          data-tab={TAB_1}
        >
          Характеристики
        </button>
        <button
          className={classNames(styles.button, {
            [styles.buttonActive]: activeTab === TAB_2,
          })}
          onClick={onButtonClick}
          type="button"
          data-tab={TAB_2}
        >
          Отзывы
        </button>
        <button
          className={classNames(styles.button, {
            [styles.buttonActive]: activeTab === TAB_3,
          })}
          onClick={onButtonClick}
          type="button"
          data-tab={TAB_3}
        >
          Контакты
        </button>
      </div>
      {activeTab === TAB_1 && (
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
      )}
      {activeTab === TAB_3 && <Contacts />}
    </div>
  );
}

export default Tabs;
