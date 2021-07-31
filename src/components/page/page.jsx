import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Slider from '../slider/slider';
import styles from './page.module.scss';

function Page() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Slider />
      </main>
      <Footer />
    </div>
  );
}

export default Page;
