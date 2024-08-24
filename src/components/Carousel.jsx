import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const slides = [
    { image: '/image1.jpg', text: 'First Slide Text' },
    { image: '/image2.jpg', text: 'Second Slide Text' },
    { image: '/image3.jpg', text: 'Third Slide Text' },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="slide-number">{`${index + 1}/3`}</div>
            <div className="slide-text">{slide.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
