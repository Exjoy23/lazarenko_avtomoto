import React from 'react';
import { useSelector } from 'react-redux';
import ReviewItem from '../review-item/review-item';
import styles from './review-list.module.scss';

function ReviewList() {
  const reviews = useSelector(({ dataSlice }) => dataSlice.reviews);

  return (
    <div className={styles.wrapper}>
      <a className={styles.link} href="/">
        Оставить отзыв
      </a>
      <ul className={styles.list}>
        {reviews.map((item) => (
          <ReviewItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
