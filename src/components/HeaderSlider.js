import React from "react";
import Slider from "react-slick";
import slider01 from '../images/header-slider-img-01.jpg';
import slider02 from '../images/header-slider-img-02.jpg';
import slider03 from '../images/header-slider-img-03.jpg';
import wave from '../images/wave-white.png'


function HeaderSlider() {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="slider">
        <div className="image-container">
          <img src={slider01} alt="" />
          <div className="text-container">
            <h2>We design and fabricate indestructible wastewater screens.</h2>
            <h2>Enough said.</h2>
            <a>VIEW PRODUCTS</a>
            <a>VIEW SERVICES</a>
          </div>
        </div>
        <div className="image-container">
          <img src={slider02} alt="" />
          <div className="text-container">
            <h2>We design and fabricate indestructible wastewater screens.Enough said.</h2>
            <a>VIEW PRODUCTS</a>
            <a>VIEW SERVICES</a>
          </div>
        </div>
        <div className="image-container">
          <img src={slider03} alt="" />
          <div className="text-container">
            <h2>We design and fabricate indestructible wastewater screens.</h2>
            <h2>Enough said.</h2>
            <a>VIEW PRODUCTS</a>
            <a>VIEW SERVICES</a>
          </div>
        </div>
      </Slider>
        <div className="wave-container">
          <img src={wave} alt="White wave" />
      </div>
    </div>
  )
}

export default HeaderSlider;