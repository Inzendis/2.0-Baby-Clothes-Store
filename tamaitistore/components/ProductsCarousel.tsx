import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import ProductItem from "./ProductItem";
import { IData } from "../utils/data";

interface ProductsCarouselProps {
  products: IData[];
}

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ products }) => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();

  return (
    <div className="flex overflow-hidden">
      <button onClick={() => prev()} className="mx-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.125 21.1L.7 12.7q-.15-.15-.213-.325T.425 12q0-.2.063-.375T.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z"
          ></path>
        </svg>
      </button>
      <ul
        ref={scrollRef}
        className="flex overflow-auto space-x-4 scrollbar-hide"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {products.map((product, i) => (
          <li key={product.slug} className="flex-none">
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
      <button onClick={() => next()} className="mx-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375t.887.375l8.4 8.425q.15.15.213.325T17.6 12q0 .2-.063.375t-.212.325L8.9 21.125q-.35.35-.863.35T7.15 21.1Z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ProductsCarousel;
