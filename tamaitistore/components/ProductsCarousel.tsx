import React from "react";
import ProductItem from "./ProductItem";
import { IData } from "../utils/data";
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
interface ProductsCarouselProps {
  products: IData[];
}

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ products }) => {
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
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          speed: 500,
          dots: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider ref={slider} {...settings}>
      {products.map((product) => (
        <ProductItem product={product} key={product.slug}></ProductItem>
      ))}
    </Slider>
  );
};

export default ProductsCarousel;
