import React, { useState } from 'react';
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
    document.body.style = 'overflow: hidden; padding-right: 17px';
  };

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
      {isModalActive && <Modal onActive={setIsModalActive} />}
    </div>
  );
}

export default Reviews;
