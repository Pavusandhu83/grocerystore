
import React from 'react';
import Slider from 'react-slick';
import { useEffect } from 'react';
// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

function Carousel() {
  // Slick Carousel settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Delay between slides (3 seconds)
    arrows: true, // Show previous and next arrows
  };

  return (
    
    <>
    <div className="scrolling-text-wrapper my-0.5">
  <div className="scrolling-text">
    🛒 Welcome to our Grocery Store! Enjoy great deals on Fruits, Dairy, Snacks, and more! 🥦🍞🧃
  </div>
</div>

      <Slider {...settings}>
        {/* Carousel Slides */}
        
        <div>
          <img 
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1130,q-80"
            className="d-block w-100" 
            alt="Best Gifts for Her"
          />
        </div>
        <div>
          <img 
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1130,q-80"
            className="d-block w-100" 
            alt="Personalized Gifts"
          />
        </div>
        <div>
          <img 
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1130,q-80"
            className="d-block w-100" 
            alt="Gift Combos"
          />
        </div>
      </Slider>
     {/* Image Banner Below Carousel */}
     <div className="carousel-image-banner">
        <img 
          src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2FDFCR_Web.png&w=3840&q=75" 
          alt="Promotional Banner"
          className="banner-img"
        />
      </div>
    </>
  );
}




export default Carousel;
