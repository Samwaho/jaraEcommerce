import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Props = {
  children: React.ReactNode;
  slidesToShow: number;
  autoPlay: boolean;
};
const SliderComponent = ({ children, slidesToShow, autoPlay }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container pb-6">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SliderComponent;
