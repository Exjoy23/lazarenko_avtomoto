import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './page.module.scss';

function Page() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
}

export default Page;
