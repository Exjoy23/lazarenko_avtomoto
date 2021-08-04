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
        <div className={styles.container}>
          <div className={styles.slider}>
            <Slider />
          </div>
          <div className={styles.info}>
            <Info />
          </div>
          <Tabs />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
