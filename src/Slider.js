import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderImg from './assets/slider.png';

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider className="slider" {...settings}>
      <div className="slider__item">
        <img src={sliderImg} alt=""/>
      </div>     
      <div className="slider__item">
        <img src={sliderImg} alt=""/>
      </div>     
    </Slider>
  );
}