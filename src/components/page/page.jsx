import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Info from '../info/info';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';
import styles from './page.module.scss';

function Page() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <h1 className="visually-hidden">
          Страница предложения автомобиля Марпех 11
        </h1>
        <section className={styles.inner}>
          <div className={styles.slider}>
            <Slider />
          </div>
          <div className={styles.info}>
            <Info />
          </div>
          <Tabs />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
