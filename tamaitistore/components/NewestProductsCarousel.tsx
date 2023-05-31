import React from "react";
import ProductItem from "./ProductItem";
import { Data } from "../utils/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
interface CustomArrowProps {
  className?: string | undefined;
  onClick?: React.MouseEventHandler<any> | undefined;
  style?: React.CSSProperties | undefined;
}

function SampleNextArrow({ className, onClick, style }: CustomArrowProps) {
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowForward
        style={{
          ...style,
          color: "black",
          fontSize: "48px",
          background: "grey",
          borderRadius: 500,
        }}
      />
    </div>
  );
}

function SamplePrevArrow({ className, onClick, style }: CustomArrowProps) {
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowBack
        style={{
          ...style,
          color: "black",
          fontSize: "48px",
          background: "grey",
          borderRadius: 500,
        }}
      />
    </div>
  );
}

const NewestProductsCarousel: React.FC = () => {
  const slider = React.useRef(null);
  var settings = {
    dots: true,
    infinite: false,
    speed: 0,
    slidesToShow: 5,
    slidesToScroll: 5,
    vertical: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          speed: 500,
          dots: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          speed: 500,
          dots: true,
          initialSlide: 0,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider ref={slider} {...settings}>
      {Data.map((product) => (
        <ProductItem product={product} key={product.slug}></ProductItem>
      ))}
    </Slider>
  );
};

export default NewestProductsCarousel;
