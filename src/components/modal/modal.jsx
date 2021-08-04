import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StarRatings from 'react-star-ratings';
import styles from './modal.module.scss';
import { useDispatch } from 'react-redux';
import { addReview } from '../../store/slices/data-slice';
import useLocalStorage from '../../hooks/useLocalStorage';

const DEFAULT_RATING = 0;
const DEFAULT_TIME = 'только что';
const MIN_LENGTH = 1;
const ESCAPE = 'Escape';
const ModalFields = {
  RATING: 'rating',
  NAME: 'name',
  PLUS: 'plus',
  MINUS: 'minus',
  COMMENT: 'comment',
};

let id = 3;

function Modal({ onActive }) {
  const dispatch = useDispatch();

  const [rating, setRating] = useLocalStorage(
    ModalFields.RATING,
    DEFAULT_RATING,
  );
  const [name, setName] = useLocalStorage(ModalFields.NAME, '');
  const [plus, setPlus] = useLocalStorage(ModalFields.PLUS, '');
  const [minus, setMinus] = useLocalStorage(ModalFields.MINUS, '');
  const [comment, setComment] = useLocalStorage(ModalFields.COMMENT, '');
  const [isNameWrong, setIsNameWrong] = useState(false);
  const [isCommentWrong, setIsCommentWrong] = useState(false);

  const nameRef = useRef(null);

  const closeModal = useCallback(() => {
    onActive(false);
    document.body.style = 'overflow: normal; padding-right: 0';
  }, [onActive]);

  useEffect(() => {
    nameRef.current.focus();

    const onEscapeKeydown = (evt) => {
      if (evt.code === ESCAPE) {
        closeModal();
      }
    };

    document.addEventListener('keydown', onEscapeKeydown);

    return () => {
      document.removeEventListener('keydown', onEscapeKeydown);
    };
  }, [closeModal]);

  const onModalClick = (evt) => {
    if (
      evt.target.classList.value === styles.wrapper ||
      evt.target.classList.value === styles.close
    ) {
      closeModal();
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
          time: DEFAULT_TIME,
        }),
      );
      closeModal();
      setRating(DEFAULT_RATING);
      setName('');
      setPlus('');
      setMinus('');
      setComment('');
    }
  };

  return (
    <div className={styles.wrapper} onClick={onModalClick}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Оставить отзыв</h2>
        <form className={styles.form} onSubmit={onFormSubmit}>
          <div className={styles.inner}>
            <label className={classNames(styles.label, styles.name)}>
              {isNameWrong && (
                <span className={styles.warning}>
                  Пожалуйста, заполните поле
                </span>
              )}
              <input
                className={classNames(styles.input, {
                  [styles.wrong]: isNameWrong,
                })}
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(evt) => {
                  setName(evt.target.value);
                }}
                ref={nameRef}
              />
            </label>
            <label className={styles.label}>
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
            <label className={styles.label}>
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
                rating={+rating}
                changeRating={setRating}
                starDimension="27px"
                starSpacing="4px"
                starRatedColor="rgb(209, 33, 54)"
                starHoverColor="rgb(209, 33, 54)"
              />
            </div>
            <div className={styles.text}>
              {isCommentWrong && (
                <span className={styles.warning}>
                  Пожалуйста, заполните поле
                </span>
              )}
              <textarea
                className={classNames(styles.textarea, {
                  [styles.wrong]: isCommentWrong,
                })}
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
