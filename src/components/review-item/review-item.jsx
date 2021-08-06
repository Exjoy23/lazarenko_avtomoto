import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StarRatings from 'react-star-ratings';
import styles from './review-item.module.scss';

function ReviewItem({ name, plus, minus, comment, rating, time }) {
  return (
    <li className={styles.item}>
      <h2 className={styles.name}>{name}</h2>
      <div>
        <p className={classNames(styles.title, styles.title_plus)}>
          Достоинства
        </p>
        <p className={styles.text}>{plus}</p>
      </div>
      <div>
        <p className={classNames(styles.title, styles.title_minus)}>
          Недостатки
        </p>
        <p className={styles.text}>{minus}</p>
      </div>
      <div>
        <p className={styles.title}>Комментарий</p>
        <p className={classNames(styles.text, styles.comment)}>{comment}</p>
      </div>
      <div className={styles.rating}>
        <StarRatings
          rating={rating}
          starDimension="17px"
          starSpacing="2px"
          starRatedColor="rgb(209, 33, 54)"
        />
        <span className={styles.rating_text}>Советует</span>
      </div>
      <div className={styles.time}>
        <span className={styles.time_text}>{time}</span>
        <a className={styles.time_link} href="/">
          Ответить
        </a>
      </div>
    </li>
  );
}

ReviewItem.propTypes = {
  name: PropTypes.string.isRequired,
  plus: PropTypes.string.isRequired,
  minus: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
};

export default ReviewItem;
