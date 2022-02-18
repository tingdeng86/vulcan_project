import React from "react";
import Slider from "react-slick";
import slider01 from '../images/header-slider-img-01.jpg';
import slider02 from '../images/header-slider-img-02.jpg';
import slider03 from '../images/header-slider-img-03.jpg'

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
      <Slider {...settings}>
        <div>
          <img src={slider01} alt="" />
        </div>
        <div>
          <img src={slider02} alt="" />
        </div>
        <div>
          <img src={slider03} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default HeaderSlider;