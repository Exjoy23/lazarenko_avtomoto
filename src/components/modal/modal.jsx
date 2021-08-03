import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import styles from './modal.module.scss';
import { useDispatch } from 'react-redux';
import { addReview } from '../../store/slices/data-slice';

const DEFAULT_RATING = 0;
const MIN_LENGTH = 1;

let id = 3;

function Modal({ onActive }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(DEFAULT_RATING);
  const [name, setName] = useState('');
  const [plus, setPlus] = useState('');
  const [minus, setMinus] = useState('');
  const [comment, setComment] = useState('');
  const [isNameWrong, setIsNameWrong] = useState(false);
  const [isCommentWrong, setIsCommentWrong] = useState(false);

  const onClose = (evt) => {
    if (
      evt.target.classList.value === styles.wrapper ||
      evt.target.classList.value === styles.close
    ) {
      onActive(false);
      document.body.style = 'overflow: normal; padding-right: 0';
    }
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    const isNameExist = name.trim().length >= MIN_LENGTH;
    const isCommentExist = comment.trim().length >= MIN_LENGTH;

    if (!isNameExist) {
      setIsNameWrong(true);
    } else {
      setIsNameWrong(false);
    }

    if (!isCommentExist) {
      setIsCommentWrong(true);
    } else {
      setIsCommentWrong(false);
    }

    if (isNameExist && isCommentExist) {
      dispatch(
        addReview({
          id: id++,
          name,
          plus,
          minus,
          comment,
          rating,
        }),
      );
      onActive(false);
      document.body.style = 'overflow: normal; padding-right: 0';
    }
  };

  return (
    <div className={styles.wrapper} onClick={onClose}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Оставить отзыв</h2>
        <form className={styles.form} onSubmit={onFormSubmit}>
          <div className={styles.inner}>
            <label className={styles.name}>
              {isNameWrong && (
                <span className={styles.warning}>
                  Пожалуйста, заполните поле
                </span>
              )}
              <input
                className={styles.input}
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(evt) => {
                  setName(evt.target.value);
                }}
              />
            </label>
            <label>
              <input
                className={styles.input}
                type="text"
                placeholder="Достоинства"
                value={plus}
                onChange={(evt) => {
                  setPlus(evt.target.value);
                }}
              />
            </label>
            <label>
              <input
                className={styles.input}
                type="text"
                placeholder="Недостатки"
                value={minus}
                onChange={(evt) => {
                  setMinus(evt.target.value);
                }}
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
              {isCommentWrong && (
                <span className={styles.warning}>
                  Пожалуйста, заполните поле
                </span>
              )}
              <textarea
                className={styles.textarea}
                cols="30"
                rows="10"
                placeholder="Комментарий"
                value={comment}
                onChange={(evt) => {
                  setComment(evt.target.value);
                }}
              />
            </div>
          </div>
          <button className={styles.button} type="submit">
            Оставить отзыв
          </button>
        </form>
        <button className={styles.close} type="button"></button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onActive: PropTypes.func.isRequired,
};

export default Modal;
