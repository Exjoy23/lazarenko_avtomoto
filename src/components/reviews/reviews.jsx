import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReviewItem from '../review-item/review-item';
import Modal from '../modal/modal';
import styles from './reviews.module.scss';

function Reviews() {
  const reviews = useSelector(({ dataSlice }) => dataSlice.reviews);

  const [isModalActive, setIsModalActive] = useState(false);

  const onButtonClick = (evt) => {
    evt.preventDefault();
    setIsModalActive(true);
  };

  useEffect(() => {
    if (isModalActive) {
      document.body.style = 'overflow: hidden; padding-right: 17px';
    }

    if (!isModalActive) {
      document.body.style = 'overflow: visible; padding-right: 0';
    }
  }, [isModalActive]);

  return (
    <div className={styles.wrapper}>
      <h2 className="visually-hidden">Отзывы</h2>
      <a className={styles.link} href="/" onClick={onButtonClick}>
        Оставить отзыв
      </a>
      <ul className={styles.list}>
        {reviews.map((item) => (
          <ReviewItem key={item.id} {...item} />
        ))}
      </ul>
      <Modal onActive={setIsModalActive} isOpen={isModalActive} />
    </div>
  );
}

export default Reviews;
