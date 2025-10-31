import React, { useEffect } from 'react';
import '../Styles/Carousel.css';

function Carousel() {
  useEffect(() => {
    let slideIndex = 0;
    let timer = null;

    function showSlides() {
      const slides = document.getElementsByClassName('slide');

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      if (slides.length > 0) {
        slides[slideIndex - 1].style.display = 'block';
      }

      timer = setTimeout(showSlides, 3000);
    }

    showSlides();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="slide">
        <img src="17pro.png" alt="Slide 1" />
      </div>
      <div className="slide">
        <img src="17.png" alt="Slide 2" />
      </div>
      <div className="slide">
        <img src="slide3.jpg" alt="Slide 3" />
      </div>
    </div>
  );
}

export default Carousel;