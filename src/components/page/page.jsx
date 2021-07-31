import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Info from '../info/info';
import Slider from '../slider/slider';
import styles from './page.module.scss';

function Page() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Slider />
          <Info />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
