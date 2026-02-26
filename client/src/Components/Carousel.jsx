import React, { useEffect } from 'react';
import '../Styles/Carousel.css';
import iphone17 from '../assets/iphone17.webp';
import iphone17Air from '../assets/iphone17Air.webp';
import iphone17ProMax from '../assets/iphone17promax.webp';
import appleLogo from '../assets/apple-logo.png';
import lineup from '../assets/17lineup.png';


function Carousel() {
  useEffect(() => {
    let slideIndex = 0;
    let timer = null;

    function showSlides() {
      const slides = document.getElementsByClassName('slide');


      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides[i].classList.remove('active');
      }

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      if (slides.length > 0) {
        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].classList.add('active');
      }

      timer = setTimeout(showSlides, 3000);
    }

    showSlides();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className= "information-container">
          <h1>Welcome to TechSphere</h1>
          <p>Discover the latest phones, tablets, headphones, TVs and smart watches. Shop with confidence with secure checkout and fast delivery.</p>
          
          <div className="button-container">
            <a className="explore-button" href="/Phone">Shop Now</a>
            <a className="explore-button-2" href="#featured_product">View Featured Products</a>

          </div>

      </div>
      <div className="slider-container">

<img src={appleLogo} alt="Apple Logo" className="carouselapplelogo" />

    <div className="slide">
      <img src={lineup} alt = "iphone17lineup" className='lineup-image' />
      <div className="slide-text">The iPhone 17 Range</div>
    </div>
      <div className="slide">
        <img src={iphone17ProMax} alt="Iphone 17 Pro Max" />
        <div className="slide-text">iPhone 17 Pro Max</div>
      </div>
      <div className="slide">
        <img src={iphone17} alt="Iphone 17" />
        <div className='slide-text'>iPhone 17</div>
      </div>
      <div className="slide">
        <img src={iphone17Air} alt="Iphone 17 Air" />
        <div className='slide-text'>iPhone 17 Air</div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Carousel;