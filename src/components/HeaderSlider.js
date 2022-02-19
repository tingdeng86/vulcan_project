import React from "react";
import Slider from "react-slick";
import slider01 from '../images/header-slider-img-01.jpg';
import slider02 from '../images/header-slider-img-02.jpg';
import slider03 from '../images/header-slider-img-03.jpg';
import wave from '../images/wave-white.png';
import Wave from './Wave';


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
    <section className="slider-container">
      <Slider {...settings} className="slider">
        <div className="image-container">
          <img src={slider01} alt="" />
          <div className="text-container">
            <h2>We design and fabricate indestructible wastewater screens. Enough said.</h2>
            <div className="link-container">
              <a href="/">VIEW PRODUCTS</a>
              <a href="/">VIEW SERVICES</a>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={slider02} alt="" />
          <div className="text-container">
            <h2>We design and fabricate indestructible wastewater screens. Enough said.</h2>
            <div className="link-container">
              <a href="/">VIEW PRODUCTS</a>
              <a href="/">VIEW SERVICES</a>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={slider03} alt="" />
          <div className="text-container">
            <h2>We design and fabricate indestructible wastewater screens. Enough said.</h2>
            <div className="link-container">
              <a href="/">VIEW PRODUCTS</a>
              <a href="/">VIEW SERVICES</a>
            </div>
          </div>
        </div>
      </Slider>
      <Wave source={wave} description="White wave"/>
    </section>
  )
}

export default HeaderSlider;