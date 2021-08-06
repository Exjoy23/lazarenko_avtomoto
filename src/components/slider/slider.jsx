import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './slider.module.scss';
import slide1 from '../../assets/img/slide-1.jpg';
import slide2 from '../../assets/img/slide-2.jpg';
import slide3 from '../../assets/img/slide-3.jpg';

const DEFAULT_SLIDE = 0;
const SLIDE_COUNT = 1;

const slides = [slide1, slide2, slide3];
const maxSlideIndex = slides.length - SLIDE_COUNT;

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(DEFAULT_SLIDE);

  const onPrevButtonClick = () => {
    if (currentSlide > DEFAULT_SLIDE) {
      setCurrentSlide((slide) => slide - SLIDE_COUNT);
    }
  };

  const onNextButtonClick = () => {
    if (currentSlide < maxSlideIndex) {
      setCurrentSlide((slide) => slide + SLIDE_COUNT);
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.current_slide}>
        <span className={styles.badge}>new model</span>
        <img
          className={styles.current}
          width="600"
          height="375"
          src={slides[currentSlide]}
          alt="авто"
        />
      </div>
      <div className={styles.slides}>
        <button
          className={classNames(styles.button, styles.button_prev)}
          onClick={onPrevButtonClick}
          type="button"
          disabled={currentSlide === DEFAULT_SLIDE}
          aria-label="показать предыдущий слайд"
        />
        <img
          className={styles.slide}
          width="128"
          height="80"
          src={slide1}
          alt="автомобиль"
        />
        <img
          className={styles.slide}
          width="128"
          height="80"
          src={slide2}
          alt="интерьер"
        />
        <img
          className={styles.slide}
          width="128"
          height="80"
          src={slide3}
          alt="спидометр"
        />
        <button
          className={styles.button}
          onClick={onNextButtonClick}
          type="button"
          disabled={currentSlide === maxSlideIndex}
          aria-label="показать следующий слайд"
        />
      </div>
    </div>
  );
}

export default Slider;
