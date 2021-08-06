import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './tabs.module.scss';
import Contacts from '../contacts/contacts';
import Reviews from '../reviews/reviews';
import Specs from '../specs/specs';

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
            [styles.button_active]: activeTab === TAB_1,
          })}
          onClick={onButtonClick}
          type="button"
          data-tab={TAB_1}
        >
          Характеристики
        </button>
        <button
          className={classNames(styles.button, {
            [styles.button_active]: activeTab === TAB_2,
          })}
          onClick={onButtonClick}
          type="button"
          data-tab={TAB_2}
        >
          Отзывы
        </button>
        <button
          className={classNames(styles.button, {
            [styles.button_active]: activeTab === TAB_3,
          })}
          onClick={onButtonClick}
          type="button"
          data-tab={TAB_3}
        >
          Контакты
        </button>
      </div>
      {activeTab === TAB_1 && <Specs />}
      {activeTab === TAB_2 && <Reviews />}
      {activeTab === TAB_3 && <Contacts />}
    </div>
  );
}

export default Tabs;
