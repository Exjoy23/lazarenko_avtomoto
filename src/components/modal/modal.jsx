import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactStars from 'react-rating-stars-component';
import styles from './modal.module.scss';
import { useDispatch } from 'react-redux';
import { addReview } from '../../store/slices/data-slice';
import useLocalStorage from '../../hooks/useLocalStorage';
import ReactModal from 'react-modal';

const DEFAULT_RATING = 0;
const DEFAULT_TIME = 'только что';
const MIN_LENGTH = 1;
const ModalFields = {
  RATING: 'rating',
  NAME: 'name',
  PLUS: 'plus',
  MINUS: 'minus',
  COMMENT: 'comment',
};

let id = 3;

function Modal({ onActive, isOpen }) {
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

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    const isNameExist = name.trim().length >= MIN_LENGTH;
    const isCommentExist = comment.trim().length >= MIN_LENGTH;

    if (!isNameExist) {
      setIsNameWrong(true);
    }

    if (isNameExist) {
      setIsNameWrong(false);
    }

    if (!isCommentExist) {
      setIsCommentWrong(true);
    }

    if (isCommentExist) {
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
      onActive(false);
      setRating(DEFAULT_RATING);
      setName('');
      setPlus('');
      setMinus('');
      setComment('');
    }
  };

  return (
    <ReactModal
      className={styles.modal}
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={() => onActive(false)}
      onAfterOpen={() => nameRef.current.focus()}
      style={{ overlay: { backgroundColor: 'rgba(88, 87, 87, 0.6)' } }}
      ariaHideApp={false}
    >
      <h2 className={styles.title}>Оставить отзыв</h2>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <div className={styles.inner}>
          <label className={classNames(styles.label, styles.name)}>
            {isNameWrong && (
              <span className={styles.warning}>Пожалуйста, заполните поле</span>
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
              aria-label="Имя"
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
              aria-label="Достоинства"
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
              aria-label="Недостатки"
            />
          </label>
        </div>
        <div className={styles.comment}>
          <div className={styles.rating}>
            <span className={styles.rating_text}>Оцените товар:</span>
            <ReactStars
              count={5}
              value={+rating}
              onChange={setRating}
              activeColor="rgb(209, 33, 54)"
              color="rgba(189, 190, 194, 0.7)"
              size={35}
              a11y
              classNames={styles.stars}
            />
          </div>
          <div className={styles.text}>
            {isCommentWrong && (
              <span className={styles.warning}>Пожалуйста, заполните поле</span>
            )}
            <label>
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
                aria-label="Комментарий"
              />
            </label>
          </div>
        </div>
        <button className={styles.button} type="submit">
          Оставить отзыв
        </button>
      </form>
      <button
        className={styles.close}
        type="button"
        onClick={() => onActive(false)}
      />
    </ReactModal>
  );
}

Modal.propTypes = {
  onActive: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
