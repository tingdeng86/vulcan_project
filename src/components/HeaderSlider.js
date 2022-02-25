import React from "react";
import Slider from "react-slick";
import slider01 from '../images/header-slider-img-01.jpg';
import slider02 from '../images/header-slider-img-02.jpg';
import slider03 from '../images/header-slider-img-03.jpg';
import wave from '../images/wave-white.png';
import Wave from './Wave';
import Icon from './Icon';
import '../styles/fontello.css'

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
          <div className="header-container">
            <div className="info-bar">
              <div className="info-left">
                <ul>
                  <li><a href="/">Install Map</a></li>
                  <li><a href="/">Product Literature</a></li>
                </ul>
              </div>
              <div className="info-right">
                <ul>
                  <li><a href="/"><i class="icon-phone"></i> +1 712-642-2755</a></li>
                  <li><a href="/"><i class="icon-mail"></i> Contact us</a></li>
                </ul>
              </div>
            </div>
            <Icon/>
            <div className="nav-tablet-desktop">
              <ul>
                <a href="/">ABOUT</a>
                <a href="/">PRODUCTS</a>
                <a href="/">SERVICES</a>
                <a href="/">PARTS</a>
                <a href="/">NEWS</a>
                <a href="/">CONTACT</a>
              </ul>
            </div>
          </div>
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
          <div className="header-container">
            <div className="info-bar">
              <div className="info-left">
                <ul>
                  <li><a href="/">Install Map</a></li>
                  <li><a href="/">Product Literature</a></li>
                </ul>
              </div>
              <div className="info-right">
                <ul>
                  <li><a href="/"><i class="icon-phone"></i> +1 712-642-2755</a></li>
                  <li><a href="/"><i class="icon-mail"></i> Contact us</a></li>
                </ul>
              </div>
            </div>
            <Icon/>
            <div className="nav-tablet-desktop">
              <ul>
                <a href="/">ABOUT</a>
                <a href="/">PRODUCTS</a>
                <a href="/">SERVICES</a>
                <a href="/">PARTS</a>
                <a href="/">NEWS</a>
                <a href="/">CONTACT</a>
              </ul>
            </div>
          </div>
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
          <div className="header-container">
            <div className="info-bar">
              <div className="info-left">
                <ul>
                  <li><a href="/">Install Map</a></li>
                  <li><a href="/">Product Literature</a></li>
                </ul>
              </div>
              <div className="info-right">
                <ul>
                  <li><a href="/"><i class="icon-phone"></i> +1 712-642-2755</a></li>
                  <li><a href="/"><i class="icon-mail"></i> Contact us</a></li>
                </ul>
              </div>
            </div>
            <Icon/>
            <div className="nav-tablet-desktop">
              <ul>
                <a href="/">ABOUT</a>
                <a href="/">PRODUCTS</a>
                <a href="/">SERVICES</a>
                <a href="/">PARTS</a>
                <a href="/">NEWS</a>
                <a href="/">CONTACT</a>
              </ul>
            </div>
          </div>
          <div className="text-container">
            <h2>We design and fabricate indestructible wastewater screens. Enough said.</h2>
            <div className="link-container">
              <a href="/">VIEW PRODUCTS</a>
              <a href="/">VIEW SERVICES</a>
            </div>
          </div>
        </div>
      </Slider>
      <Wave source={wave} description="White wave" />
    </section>
  )
}

export default HeaderSlider;