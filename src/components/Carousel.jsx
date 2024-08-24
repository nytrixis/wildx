import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const slides = [
    { image: image1, text: 'First Slide Text', desc: 'Anti-Intrusion', desc1: 'We protect you from intrusive wild animals by using sophisticated sound technology.' },
    { image: image2, text: 'Second Slide Text', desc: 'Anti-Intrusion', desc1: 'We protect you from intrusive wild animals by using sophisticated sound technology.' },
    { image: image3, text: 'Third Slide Text', desc: 'Anti-Intrusion', desc1: 'We protect you from intrusive wild animals by using sophisticated sound technology.'  },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            {/* <div className="slide-number">{`${index + 1}/3`}</div> */}
            <div className="slide-desc">{slide.desc}</div>
            <div className="slide-desc1">{slide.desc1}</div>
            <div className="slide-buttons">
              <button className="slide-button">Learn More</button>
              <button className="slide-button" id='btn2'>Donate</button>
            </div>
            {/* <div className="slide-text">{slide.text}</div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
