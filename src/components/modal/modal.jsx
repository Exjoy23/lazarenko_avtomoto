import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import styles from './modal.module.scss';

const DEFAULT_RATING = 0;

function Modal() {
  const [rating, setRating] = useState(DEFAULT_RATING);

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Оставить отзыв</h2>
        <form className={styles.form}>
          <div className={styles.inner}>
            <label className={styles.name}>
              <span className={styles.warning}>Пожалуйста, заполните поле</span>
              <input className={styles.input} type="text" placeholder="Имя" />
            </label>
            <label>
              <input
                className={styles.input}
                type="text"
                placeholder="Достоинства"
              />
            </label>
            <label>
              <input
                className={styles.input}
                type="text"
                placeholder="Недостатки"
              />
            </label>
          </div>
          <div className={styles.comment}>
            <div className={styles.rating}>
              <span className={styles.ratingText}>Оцените товар:</span>
              <StarRatings
                rating={rating}
                changeRating={setRating}
                starDimension="27px"
                starSpacing="4px"
                starRatedColor="rgb(209, 33, 54)"
              />
            </div>
            <div className={styles.text}>
              <span className={styles.warning}>Пожалуйста, заполните поле</span>
              <textarea
                className={styles.textarea}
                cols="30"
                rows="10"
                placeholder="Комментарий"
              />
            </div>
          </div>
          <button className={styles.button}>Оставить отзыв</button>
        </form>
        <button className={styles.close} type="button"></button>
      </div>
    </div>
  );
}

export default Modal;
