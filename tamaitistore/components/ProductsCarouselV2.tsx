import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IData } from "../utils/data";
import ProductItem from "./ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

import { useState } from "react";
interface ProductsCarouselProps {
  products: IData[];
}

const ProductsCarouselV2: React.FC<ProductsCarouselProps> = ({ products }) => {
  const [swipe, setSwipe] = useState<any>();
  return (
    <div className="flex flex-row relative items-center">
      <div className="hidden lg:flex md:top-40 pb-36">
        <button
          className="md:w-24 md:h-16 flex md:justify-end self-center"
          onClick={() => swipe?.slidePrev()}
        >
          <IoIosArrowBack className="w-16 h-16" />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        onBeforeInit={(swipper) => setSwipe(swipper)}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
        breakpoints={{
          2000: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          280: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.slug}>
            <ProductItem product={product} key={product.slug}></ProductItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden lg:flex justify-end pb-36">
        <button
          className="md:w-24 md:h-16 flex"
          onClick={() => swipe?.slideNext()}
        >
          <IoIosArrowForward className="w-16 h-16" />
        </button>
      </div>
    </div>
  );
};

export default ProductsCarouselV2;
