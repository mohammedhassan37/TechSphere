import React, { useEffect } from 'react';
import '../Styles/Carousel.css';
import iphone17 from '../assets/iphone17.webp';
import iphone17Air from '../assets/iphone17Air.webp';
import iphone17ProMax from '../assets/iphone17promax.webp';

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
        <img src={iphone17ProMax} alt="Iphone 17 Pro Max" />
      </div>
      <div className="slide">
        <img src={iphone17} alt="Iphone 17" />
      </div>
      <div className="slide">
        <img src={iphone17Air} alt="Iphone 17 Air" />
      </div>
    </div>
  );
}

export default Carousel;